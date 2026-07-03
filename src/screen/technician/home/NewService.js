import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar, Image
} from 'react-native';
import { ChevronDown, Plus, ArrowLeft } from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/NewService.style';
import { Dropdown } from 'react-native-element-dropdown';
import { getCatalogServices } from '../../../services/CatalogService';
import { assignServiceToTechnician } from '../../../services/CatalogService';
import { getUser } from '../../../storage/AuthStorage'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';

export default function NewService() {
  const navigation = useNavigation();
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  // ESTADOS DEL FORMULARIO
  const [services, setServices] = useState([])
  const [error, setError] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0.00);
  const [images, setImages] = useState([]);

  const [esValido, setEsValido] = useState(false);
  useEffect(() => {
    const handleService = async () => {
      try {
        const servs = await getCatalogServices();
        if (servs) {
          setServices(servs);
        } else {
          console.error("no se pudo consultar los servicios")
        }
      } catch (error) {
        setError(error)
      }

    }
    handleService();
  }, [])

  useEffect(() => {
    const onvalid = categoria.length > 0 && nombre.length > 0 && descripcion.length > 0 && precio > 0.00 && images.length > 0;
    setEsValido(onvalid)
  }, [categoria, nombre, descripcion, precio, images])

  const handleGuardar = async () => {
    const tech = await getUser();

    const data = {
      name: nombre,
      technicalId: tech.id,
      serviceId: categoria,
      description: descripcion,
      basePrice: precio,
      images: images
    }

    try {
      await assignServiceToTechnician(data);
      navigation.navigate("Dashboard")
    } catch (error) {
      console.error(error)
    }

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

  if (error) {
    return <Text>Error al consultar las categorias de servicio: {error}</Text>
  }
  const renderItem = item => {
    return (
      <View style={styles.dropdown}>
        <Text style={styles.inputText}>{item.name}</Text>
      </View>

    )
  }


  return (
    <View style={styles.container}>
      {/* FORMULARIO DESLIZABLE */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* SELECCIONA UNA CATEGORÍA */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Selecciona una categoría</Text>
          <Dropdown
            style={styles.dropdown}
            data={services}
            maxHeight={300}
            valueField="id"
            labelField={'name'}
            placeholder='Seleccionar categoria'
            value={categoria}
            onChange={item => { setCategoria(item.id) }}
            renderItem={renderItem}
          />
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
        <TouchableOpacity style={styles.submitButton} onPress={handleGuardar} activeOpacity={0.8} >
          <Text style={styles.submitButtonText}>Guardar servicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

