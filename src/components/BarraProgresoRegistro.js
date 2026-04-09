import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/const/colors'

const Cliente = props => {
    return (
        <View >
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Paso {props.paso} de 2</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${(props.paso / 2) * 100}%` }]}></View>
            </View>
        </View>
    );
};
const Tecnico = props => {
    return (
        <View >
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Paso {props.paso} de 3</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${(props.paso / 3) * 100}%` }]}></View>
            </View>
        </View>
    );
};
const BarraProgresoRegistro = ({ pasoProgress, typeUser }) => {

    return (
        <View style={styles.progressContainer}>
            {typeUser === 'cliente' && <Cliente paso={pasoProgress}></Cliente> || <Tecnico paso={pasoProgress}></Tecnico>}
        </View>
    )
}

export default BarraProgresoRegistro

const styles = StyleSheet.create({
    progressContainer: {
        width: '90%',
        padding: 20,
        gap: 10,
        marginTop: 20,
    }, progressBar: {
        height: 10,
        backgroundColor: colors.border,
        borderRadius: 5,
    },
    progressFill: {
        backgroundColor: colors.success,
        height: '100%',
        borderRadius: 5,
    }
})