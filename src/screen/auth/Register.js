import { Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
// components
import RegistroPaso1 from "../auth/RegistroPaso1";
import RegistroPaso2 from "../auth/RegistroPaso2";
import BarraProgresoRegistro from "../../components/BarraProgresoRegistro";
import RegistroPaso3Tecnico from "../auth/RegistroPaso3Tecnico";
import UploadProfilePicture from "../../components/UploadProfilePicture";
// styles
import { createStyles } from "../../styles/Register.style";
import { useResponsive } from "../../hooks/useResponsive";
import { register } from "../../services/AuthService";
import { useAuth } from '../../context/AuthContext';

const Register = () => {
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
        typeUser: "CLIENTE",
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

    const { loginContext } = useAuth();
    const registerUser = async () => {
        try {
            const res = await register(dataRegister)
            await loginContext(res)
        } catch (error) {
            console.error(error)
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

                {paso === 3 && dataRegister.typeUser === "CLIENTE" ?
                    <>
                        <Text style={{ fontSize: responsive.font(22), fontWeight: '600' }}>Foto de perfil</Text>
                        <UploadProfilePicture onValid={actualizarValidacion} data={dataRegister} typeUser={dataRegister.typeUser}></UploadProfilePicture></>

                    : null}

                {(paso === 3 && dataRegister.typeUser === "CLIENTE") ? (
                    //subir foto
                    <Pressable
                        disabled={!esValido}
                        style={[
                            styles.btnSeguiente,
                            !esValido && { backgroundColor: "#ccc" }
                        ]}
                        onPress={registerUser}
                    >
                        <Text style={{ color: "#fff", fontSize: responsive.font(25) }}>
                            CREAR CUENTA
                        </Text>
                    </Pressable>
                ) :
                    null}

                {(paso === 3 && dataRegister.typeUser == "TECNICO") ? (
                    <>
                        <Text style={{ fontSize: responsive.font(22), fontWeight: '600' }}>Foto de perfil</Text>
                        <UploadProfilePicture onValid={actualizarValidacion} data={dataRegister} typeUser={dataRegister.typeUser}></UploadProfilePicture></>
                ) : null}
                {paso === 3 && dataRegister.typeUser === "TECNICO" && (
                    <Pressable
                        disabled={!esValido}
                        style={[
                            styles.btnSeguiente,
                            !esValido && { backgroundColor: "#ccc" },
                        ]}
                        onPress={registerUser}
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

export default Register;
