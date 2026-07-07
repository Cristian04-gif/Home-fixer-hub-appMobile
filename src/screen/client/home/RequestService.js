import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    Alert,
} from 'react-native';
import { ChevronLeft, MapPin, Calendar, Plus, ChevronDown } from 'lucide-react-native';
import colors from '../../../utils/colors';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RequestService.style';
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';
import { registerBooking } from '../../../services/BookingService';
export default function RequestService({ route }) {
    const { tech, serv } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();

    const [skill, setSkill] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [budget, setBudget] = useState(0.00);


    // DATOS SIMULADOS DEL TÉCNICO ASOCIADO
    const tecnico = {
        nombre: 'Carlos Rodríguez',
        servicio: 'Plomería',
        precio: 25.00,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    };

    const renderItem = item => {
        return (
            <View style={styles.dropdownItem}>
                <Text style={styles.inputText}>{item.name}</Text>
            </View>

        )
    }

    const registerRequest = async () =>{
        const data = {
            serviceType: serv,
            title: skill,
            description: descripcion,
            totalAmount: budget,
            technicalId: tech.id
        }
        const book = await registerBooking(data);
        if (book){
            Alert.alert("Se registro su solicitud")
            navigation.navigate("Dashboard")
        }
    }
    return (
        <View style={styles.container}>

            {/* FORMULARIO CON SCROLL */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* TARJETA RESUMEN DEL TÉCNICO */}
                <View style={styles.tecnicoCard}>
                    <Image source={{ uri: tech.urlPhotoProfile }} style={styles.avatar} />
                    <View style={styles.tecnicoInfo}>
                        <Text style={styles.tecnicoServicio}>{serv}</Text>
                        <Text style={styles.tecnicoNombre}>S/. {budget === 0.00 ? tech.price : budget}</Text>
                        <Text style={styles.tecnicoNombre}>Con {tech.name} {tech.lastName}</Text>
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>¿Qué servicio necesita?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={tech.servicesOffered}
                        maxHeight={300}
                        valueField="name"
                        labelField={'name'}
                        placeholder='Selecciona una trabajo'
                        value={skill}
                        onChange={item => { setSkill(item.name) }}
                        renderItem={renderItem}
                    />
                </View>


                {/* CAMPO 1: ¿QUÉ NECESITAS? */}
                <View style={styles.formGroup}>
                    <Text style={styles.label}>¿Qué necesitas?</Text>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            placeholder="Describe el problema o servicio que necesitas..."
                            placeholderTextColor={colors.placeholder}
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            value={descripcion}
                            onChangeText={setDescripcion}
                        />
                    </View>
                </View>

                {/* CAMPO 5: PRESUPUESTO ESTIMADO */}
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Presupuesto estimado</Text>
                    <Text style={{ color: colors.textSecondary, marginBottom: responsive.scale * 10 }}>(Un presupuesto mejor al establecido puede ser rechazado)</Text>
                    <TextInput
                        style={{
                            borderRadius: responsive.scale * 12,
                            borderWidth: responsive.scale * 1,
                            borderColor: colors.border,
                            height: responsive.scale * 50
                        }}
                        placeholder="0.00"
                        placeholderTextColor={colors.placeholder}
                        value={budget}
                        onChangeText={setBudget}
                    ></TextInput>
                </View>

            </ScrollView>

            {/* BOTÓN DE ACCIÓN FIJO AL FONDO */}
            <View style={styles.fixedBottomContainer}>
                <TouchableOpacity style={styles.btnEnviar} activeOpacity={responsive.scale * 0.8} onPress={registerRequest}>
                    <Text style={styles.textEnviar}
                    >Enviar solicitud</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
