import { Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

// components
import RegistroPaso1 from './RegistroPaso1'
import RegistroPaso2 from './RegistroPaso2'
import BarraProgresoRegistro from '../components/BarraProgresoRegistro'
import RegistroPaso3 from './RegistroPaso3';
// styles
import styles from '../styles/RegisterStyle'

const Registro = () => {
    const navigation = useNavigation();
    const [paso, setPaso] = useState(1);
    const [esValido, setEsValido] = useState(false)
    const [dataRegister, setDataRegister] = useState({
        name: '',
        lastName: '',
        numberPhone: '',
        email: '',
        typeUser: 'cliente',
        password: '',
        dni: '',
        visitFee: ''
    })
    const actualizarValidacion = (completed, data) => {
        setEsValido(completed);
        if (data) {
            setDataRegister(prev => ({ ...prev, ...data }));
            console.log(dataRegister)
        }
    }

    const manejarSiguiente = () => {
        setEsValido(false); // Reset para el paso 2
        setPaso(paso + 1);
    };
    return (

        <View style={styles.container}>
            <View style={styles.body}>

                <BarraProgresoRegistro pasoProgress={paso} typeUser={dataRegister.typeUser}></BarraProgresoRegistro>

                {paso === 1 && <RegistroPaso1 onValid={actualizarValidacion} data={dataRegister} />}

                {paso === 2 && <RegistroPaso2 onValid={actualizarValidacion} data={dataRegister} typeUser={dataRegister.typeUser} />}

                {paso === 2 && dataRegister.typeUser === 'cliente' &&
                    <Pressable disabled={!esValido} style={[styles.btnSeguiente, !esValido && { backgroundColor: '#ccc' }]} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>CREAR CUENTA</Text>
                    </Pressable>
                    || paso !== 3 &&
                    <Pressable disabled={!esValido} style={[styles.btnSeguiente, !esValido && { backgroundColor: '#ccc' }]} onPress={manejarSiguiente}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>SIGUIENTE</Text>
                    </Pressable>

                }

                {paso === 3 && <RegistroPaso3 onValid={actualizarValidacion} data={dataRegister}></RegistroPaso3>}
                {paso === 3 && dataRegister.typeUser === 'tecnico' &&
                    <Pressable disabled={!esValido} style={[styles.btnSeguiente, !esValido && { backgroundColor: '#ccc' }]} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>CREAR CUENTA</Text>
                    </Pressable>}
            </View>
        </View>
    )
}

export default Registro

