import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';
import { changeAvailability } from '../../services/TechnicalService';
import { getUser, removeUser, saveUser } from '../../storage/AuthStorage';
export default function Availability({ styles, technical, enabled }) {

    const toggleSwitch = async (technicalId) => {
        const res = await changeAvailability(technicalId);
        await removeUser();
        await saveUser(res)
        enabled(res.available)
    };
    return (
        <View style={styles.availabilityCard}>
            <View>
                <Text style={styles.statsTitle}>Disponibilidad</Text>
                <Text style={styles.availabilitySub}>{technical.available ? 'En línea' : 'Fuera de línea'}</Text>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: colors.enable }}
                thumbColor={colors.white}
                ios_backgroundColor="#E9E9EA"
                onValueChange={() => toggleSwitch(technical.id)}
                value={technical.available}
            />
        </View>
    )
}

