import { Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
// components
import RegistroPaso1 from "../components/RegistroPaso1";
import RegistroPaso2 from "../components/RegistroPaso2";
import BarraProgresoRegistro from "../components/BarraProgresoRegistro";
import RegistroPaso3 from "../components/RegistroPaso3";
// styles
import { createStyles } from "../styles/RegisterStyle";
import { useResponsive } from "../utils/useResponsive";

//hooks
import { register } from "../service/AuthService";
import { registerCustomer } from "../service/CustomerService";
import { saveToken, saveRole, getToken,getRole, saveUserId } from "../storage/AuthStorage";
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
        meansTransport: "",
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
            
            await registerCustomer(registerProfile);

            navigation.replace("Home");

        } catch (error) {

            console.log(error);

            console.log(error.response?.data);

        }
    };


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

                {(paso === 2 && dataRegister.typeUser === "cliente" && (
                    <Pressable
                        disabled={!esValido}
                        style={[
                            styles.btnSeguiente,
                            !esValido && { backgroundColor: "#ccc" },
                        ]}
                        onPress={handleRegisterCustomer}
                    >
                        <Text style={{ color: "#fff", fontSize: responsive.font(25) }}>
                            CREAR CUENTA
                        </Text>
                    </Pressable>
                )) ||
                    (paso !== 3 && (
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
                    ))}

                {paso === 3 && (
                    <RegistroPaso3
                        onValid={actualizarValidacion}
                        data={dataRegister}
                    ></RegistroPaso3>
                )}
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
            </View>
        </View>
    );
};

export default Registro;
