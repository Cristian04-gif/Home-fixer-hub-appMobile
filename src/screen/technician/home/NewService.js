import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar, Image
} from 'react-native';
import { ChevronDown, Plus, ArrowLeft } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/NewService.style';
import * as ImagePicker from 'expo-image-picker';

import colors from '../../../utils/colors';

export default function NewService() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  // ESTADOS DEL FORMULARIO
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [images, setImages] = useState([]);

  const handleGuardar = () => {
    // Aquí iría la lógica para conectar con tu backend o agregar al estado global
    console.log({ categoria, nombre, descripcion, precio, duracion });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', "Necesitamos acceso a tus fotos");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* FORMULARIO DESLIZABLE */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* SELECCIONA UNA CATEGORÍA */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Selecciona una categoría</Text>
          <TouchableOpacity style={styles.dropdownTrigger} activeOpacity={0.7}>
            <Text style={[styles.inputText, !categoria && styles.placeholderText]}>
              {categoria || 'Seleccionar categoría'}
            </Text>
            <ChevronDown size={responsive.font(20)} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* NOMBRE DEL SERVICIO */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre del servicio</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Instalación de lámparas"
            placeholderTextColor={colors.placeholder}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        {/* DESCRIPCIÓN */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe el servicio que ofreces..."
            placeholderTextColor={colors.placeholder}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            value={descripcion}
            onChangeText={setDescripcion}
          />
        </View>

        {/* PRECIO BASE */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Precio base</Text>
          <View style={styles.priceInputContainer}>
            <Text style={styles.currencySymbol}>S/.</Text>
            <TextInput
              style={styles.priceInput}
              placeholder="0.00"
              placeholderTextColor={colors.placeholder}
              keyboardType="numeric"
              value={precio}
              onChangeText={setPrecio}
            />
          </View>
        </View>

        {/* FOTOS DE EJEMPLO */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Fotos de ejemplo (opcional)</Text>
          <TouchableOpacity style={styles.uploadCard} activeOpacity={0.6} onPress={pickImage}>
            <Plus size={responsive.font(24)} color={colors.primary} style={{ marginBottom: responsive.scale * 6 }} />
            <Text style={styles.uploadText}>Agregar fotos</Text>
          </TouchableOpacity>
          <ScrollView horizontal style={styles.scrollImages}>
            {images.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.image} />
            ))}
          </ScrollView>
        </View>

      </ScrollView>

      {/* BOTÓN DE ACCIÓN FIJO INFERIOR */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleGuardar} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Guardar servicio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

