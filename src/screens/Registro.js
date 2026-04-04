import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import BarraProgresoRegistro from './BarraProgresoRegistro'
import colors from '../styles/colors'
import RegistroPaso1 from './RegistroPaso1'
import RegistroPaso2 from './RegistroPaso2'
const Registro = () => {
    const [paso, setPaso] = useState(1);
    const [esValido, setEsValido] = useState(false)
    const [dataRegister, setDataRegister] = useState({
        name: '',
        numberPhone: '',
        email: '',
        country: 'PE',
        typeUser: 'cliente'
    })
    const actualizarValidacion = (completed, data) => {
        setEsValido(completed);
        if (data) {
            setDataRegister(prev => ({ ...prev, ...data }));
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
                    <Pressable disabled={!esValido} style={[styles.btnSeguiente, !esValido && { backgroundColor: '#ccc' }]} onPress={manejarSiguiente}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>CREAR CUENTA</Text>
                    </Pressable>
                    ||
                    <Pressable disabled={!esValido} style={[styles.btnSeguiente, !esValido && { backgroundColor: '#ccc' }]} onPress={manejarSiguiente}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>SIGUIENTE</Text>
                    </Pressable>

                }

            </View>
        </View>
    )
}

export default Registro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%'
    },
    btnSeguiente: {
        position: 'absolute',
        bottom: 60,
        backgroundColor: colors.primary,
        width: '80%',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    }
})