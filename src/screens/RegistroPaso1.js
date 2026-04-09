import { StyleSheet, Text, View, TextInput, Image, Pressable, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox';
//componets
import SwitchTypeUser from '../components/SwitchTypeUser';
// styles
import styles from '../styles/RegistroPaso1Style';
import colors from '../styles/const/colors';


const PAISES = [
    { name: 'Peru', value: 'PE', icon: require('../../assets/logo-peru.png') },
    { name: 'Argentina', value: 'AR', icon: require('../../assets/logo-argentina.png') }
]
const RegistroPaso1 = ({ onValid, data }) => {

    const [value, setValue] = useState(data.country || 'PE');
    const [isChecked, setChecked] = useState(false);
    const [name, setName] = useState(data.name || '');
    const [numberPhone, setNumberPhone] = useState(data.numberPhone || '');
    const [email, setEmail] = useState(data.email || '');
    const [typeUser, setTypeUser] = useState(data.typeUser || 'cliente');

    useEffect(() => {
        const esValido = name.length > 0 && numberPhone.length > 0 && email.includes('@') && isChecked;
        onValid(esValido, { name, numberPhone, email, country: value, typeUser:  typeUser})

    }, [name, numberPhone, email, isChecked, value, typeUser])

    

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Image source={item.icon} style={{ width: 40, height: 40 }} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <SwitchTypeUser initialType={typeUser} onTypeChange={(tipo) => setTypeUser(tipo)}></SwitchTypeUser>
                <View style={styles.section}>
                    <Text style={styles.textLabel}>Nombre completo</Text>
                    <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder='Nombre completo'></TextInput>
                </View>

                <View style={styles.section}>
                    <Text style={styles.textLabel}>Numero de celular</Text>
                    <View style={styles.codeNumber}>

                        <Dropdown
                            style={styles.dropdown}
                            data={PAISES}
                            maxHeight={300}
                            valueField="value"
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                            renderItem={renderItem}
                            // Esto pone la bandera a la izquierda del texto seleccionado
                            renderLeftIcon={() => {
                                const selectedCountry = PAISES.find(p => p.value === value);
                                return selectedCountry ? (
                                    <Image source={selectedCountry.icon} style={{ width: 40, height: 40 }} />
                                ) : null;
                            }}
                        />
                        <TextInput style={{ width: '78%', fontSize: 25 }} value={numberPhone} onChangeText={setNumberPhone} placeholder='Numero' inputMode='tel'></TextInput>
                    </View>

                </View>

                <View style={styles.section}>
                    <Text style={styles.textLabel}>Correo electronico</Text>
                    <TextInput style={styles.textInput} placeholder='Correo Electronico' inputMode='email' value={email} onChangeText={setEmail} ></TextInput>
                </View>

                <View style={styles.section}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? colors.success : undefined} // El azul de tu app
                        />
                        <Text style={{ fontSize: 25 }}>Acepto los <Pressable><Text style={{ fontSize: 25, color: colors.primary }}>Términos y condiciones</Text></Pressable></Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default RegistroPaso1

