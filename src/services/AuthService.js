import { Import } from "lucide-react-native";
import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { saveToken, saveRole, saveUser, saveUserId } from "../../src/storage/AuthStorage";
import { getCustomersByUserId, registerCustomer, uploadProfileCustomerPhoto } from "./CustomerService";
import { getTechnicalByUserId, registerTechnical, uploadProfileTechnicalPhoto } from "./TechnicalService";
import { decodeToken } from "../utils/jwt";
export const login = async (data) => {
    try {
        const response = await api.post(ENDPOINTS.LOGIN, data);
        const userId = response.data.userId;
        const token = response.data.token;
        await saveToken(token);
        const payload = await decodeToken(token);
        const role = payload.role;
        let user = null;
        if (role === "CLIENTE") {
            user = await getCustomersByUserId(userId);
        }
        if (role === "TECNICO") {
            user = await getTechnicalByUserId(userId);

        }

        await saveRole(role);


        await saveUser(user);
        await saveUserId(userId);
        return response.data;
    } catch (error) {
        console.error(error)
    }

};

export const register = async (data) => {
    const registerIdentity = {
        email: data.email,
        password: data.password,
        role: data.typeUser,
    }
    const responseIdentity = await api.post(ENDPOINTS.REGISTER, registerIdentity);

    const token = responseIdentity.data.token;
    await saveToken(token);
    const userId = responseIdentity.data.userId;

    const payload = await decodeToken(token);
    const role = payload.role;

    if (role === "CLIENTE") {
        const registerProfile = {
            name: data.name,
            lastName: data.lastName,
            dni: data.dni,
            userId: userId,
        }
        const responseprofile = await registerCustomer(registerProfile);
        const techId = responseprofile.id;
        if (techId) {
            console.log(techId)
            await uploadPhoto(techId, data.photoProfile, role);
        }
    } else if (role === "TECNICO") {
        const registerProfile = {
            name: data.name,
            lastName: data.lastName,
            dni: data.dni,
            userId: userId
        };
        const responseprofile = await registerTechnical(registerProfile);
        const techId = responseprofile.id;
        if (techId) {
            console.log(techId)
            await uploadPhoto(techId, data.photoProfile, role);
        }

    } else {
        console.error("No es del rol definido")
    }


    await saveRole(role);
    await saveUserId(userId);


};

const uploadPhoto = async (id, imageUri, role) => {
    console.log(imageUri)
    if (!imageUri) {
        alert("Por favor, selecciona una foto primero")
        return;
    }

    try {

        const formData = new FormData();
        console.log("image: ", imageUri)
        console.log(imageUri.photoProfile)
        const filename = imageUri.split('/').pop();
        const match = /\.(\w+)$/.exec(filename || '');
        const type = match ? `image/${match[1]}` : `image/jpeg`;
        console.log("filename: ", filename)


        formData.append('file', {
            uri: imageUri,
            name: filename,
            type: type,
        })
        let fullRegistration = null;
        if (role === "CLIENTE") {
            fullRegistration = await uploadProfileCustomerPhoto(id, formData);
        }
        if (role === "TECNICO") {
            fullRegistration = await uploadProfileTechnicalPhoto(id, formData);
        }
        console.log(fullRegistration)
        if (!fullRegistration) {
            return;
        }

        await saveUser(fullRegistration);
    } catch (error) {
        console.log("ERROR COMPLETO");
        console.log(error);
        console.log(error.response);
        console.log(error.message);
    }
}