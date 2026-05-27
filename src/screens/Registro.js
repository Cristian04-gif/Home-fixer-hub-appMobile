import { Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
// components
import RegistroPaso1 from "../components/RegistroPaso1";
import RegistroPaso2 from "../components/RegistroPaso2";
import BarraProgresoRegistro from "../components/BarraProgresoRegistro";
import RegistroPaso3Tecnico from "../components/RegistroPaso3Tecnico";
import UploadProfilePicture from "../components/UploadProfilePicture";
// styles
import { createStyles } from "../styles/RegisterStyle";
import { useResponsive } from "../utils/useResponsive";

//hooks
import { register } from "../service/AuthService";
import { registerCustomer, uploadProfileCustomerPhoto } from "../service/CustomerService";
import { registerTechnical, uploadProfileTechnicalPhoto } from "../service/TechnicalService";
import { saveToken, saveRole, getToken, getRole, saveUserId, saveUser } from "../storage/AuthStorage";
import { decodeToken } from "../utils/jwt";
const Registro = () => {
    const responsive = useResponsive();
    const styles = createStyles(responsive);

    const navigation = useNavigation();
    const [paso, setPaso] = useState(1);
    const [esValido, setEsValido] = useState(false);

    const [dataRegister, setDataRegister] = useState({
        name: "",
        lastName: "",
        numberPhone: "",
        email: "",
        typeUser: "cliente",
        password: "",
        dni: "",
        visitFee: "",
        photoProfile: null
    });
    const actualizarValidacion = (completed, data) => {
        setEsValido(completed);
        if (data) {
            setDataRegister((prev) => ({ ...prev, ...data }));
        }
    };

    const manejarSiguiente = () => {
        setEsValido(false);
        setPaso(paso + 1);
    };

    const handleRegisterCustomer = async () => {

        try {
            const registerIdentity = {
                email: dataRegister.email,
                password: dataRegister.password,
                role: dataRegister.typeUser,
            };

            const dataIdentity = await register(registerIdentity);
            await saveToken(dataIdentity.token);

            const payload = decodeToken(dataIdentity.token);
            await saveRole(payload.role);
            await saveUserId(payload.userId);
            const registerProfile = {
                name: dataRegister.name,
                lastName: dataRegister.lastName,
                dni: dataRegister.dni,
                userId: dataIdentity.userId,
            };

            const profile = await registerCustomer(registerProfile);
            await uploadPhoto(profile.id, dataRegister.photoProfile, dataIdentity.role);
            navigation.navigate("Home");

        } catch (error) {
            console.log(error);
            console.log(error.response?.data);
        }
    };

    const uploadPhoto = async (id, imageUri, role) => {
        if (!imageUri) {
            alert("Por favor, selecciona una foto primero")
            return;
        }

        const formData = new FormData();

        const filename = imageUri.split("/").pop();
        const match = /\.(\w+)$/.exec(filename || '');
        const type = match ? `image/${match[1]}` : `image/jpeg`;

        formData.append('file', {
            uri: imageUri,
            name: filename,
            type: type,
        })
        try {
            let fullRegistration = null;
            if (role.toUpperCase() === "cliente") {
                fullRegistration = await uploadProfileCustomerPhoto(id, formData);
            }
            if (role.toUpperCase() === "tecnico") {
                fullRegistration = await uploadProfileTechnicalPhoto(id, formData);
            }
            await saveUser(JSON.stringify(fullRegistration));
        } catch (error) {
            console.error(error)
        }
    }

    const handleRegisterTechnical = async () => {
        try {
            const registerIdentity = {
                email: dataRegister.email,
                password: dataRegister.password,
                role: dataRegister.typeUser,
            };

            const dataidentity = await register(registerIdentity);
            await saveToken(dataidentity.token);

            const payload = decodeToken(dataidentity.token);
            await saveRole(payload.role);
            await saveUserId(payload.userId);

            const registerProfile = {
                name: dataRegister.name,
                lastName: dataRegister.lastName,
                dni: dataRegister.dni,
                userId: dataIdentity.userId,
                visitFee: dataRegister.visitFee
            };

            const profile = await registerTechnical(registerProfile);
            await uploadPhoto(profile.id, dataRegister.photoProfile, dataidentity.role);
            navigation.navigate("Home");
        } catch (error) {
            console.log(error);
            console.log(error.response?.data);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <BarraProgresoRegistro
                    pasoProgress={paso}
                    typeUser={dataRegister.typeUser}
                ></BarraProgresoRegistro>

                {paso === 1 && (
                    <RegistroPaso1 onValid={actualizarValidacion} data={dataRegister} />
                )}

                {paso === 2 && (
                    <RegistroPaso2
                        onValid={actualizarValidacion}
                        data={dataRegister}
                        typeUser={dataRegister.typeUser}
                    />
                )}

                {paso === 3 && dataRegister.typeUser === "cliente" ?
                    <>
                        <Text style={{ fontSize: responsive.font(22), fontWeight: '600' }}>Foto de perfil</Text>
                        <UploadProfilePicture onValid={actualizarValidacion} data={dataRegister} typeUser={dataRegister.typeUser}></UploadProfilePicture></>

                    : null}

                {(paso === 3 && dataRegister.typeUser === "cliente") ? (
                    //subir foto
                    <Pressable
                        disabled={!esValido}
                        style={[
                            styles.btnSeguiente,
                            !esValido && { backgroundColor: "#ccc" }
                        ]}
                        onPress={handleRegisterCustomer}
                    >
                        <Text style={{ color: "#fff", fontSize: responsive.font(25) }}>
                            CREAR CUENTA
                        </Text>
                    </Pressable>
                ) :
                    null}

                {(paso === 3 && dataRegister.typeUser == "tecnico") ? (
                    <RegistroPaso3Tecnico
                        onValid={actualizarValidacion}
                        data={dataRegister}
                    ></RegistroPaso3Tecnico>
                ) : null}
                {paso === 3 && dataRegister.typeUser === "tecnico" && (
                    <Pressable
                        disabled={!esValido}
                        style={[
                            styles.btnSeguiente,
                            !esValido && { backgroundColor: "#ccc" },
                        ]}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={{ color: "#fff", fontSize: responsive.font(25) }}>
                            CREAR CUENTA
                        </Text>
                    </Pressable>
                )}
                {paso !== 3 ?
                    (
                        <Pressable
                            disabled={!esValido}
                            style={[
                                styles.btnSeguiente,
                                !esValido && { backgroundColor: "#ccc" },
                            ]}
                            onPress={manejarSiguiente}
                        >
                            <Text style={{ color: "#fff", fontSize: responsive.font(25) }}>
                                SIGUIENTE
                            </Text>
                        </Pressable>
                    ) : null}
            </View>
        </View>
    );
};

export default Registro;
