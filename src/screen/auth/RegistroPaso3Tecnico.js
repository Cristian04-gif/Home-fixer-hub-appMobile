import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { createStyles } from "../../styles/RegistroPaso3.style";
import { useResponsive } from "../../hooks/useResponsive";
import UploadProfilePicture from "../../components/UploadProfilePicture";

const RegistroPaso3 = ({ onValid, data }) => {
  const responsive = useResponsive();
  const styles = createStyles(responsive);

  const [visitFee, setVisitFee] = useState(data.visitFee || 0.0);
  const [photoProfile, setPhotoProfile] = useState(
    data.photoProfile || null
  );
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const esValido = (visitFee > 0 && photoProfile !== null && isValid);
    onValid(esValido, { visitFee, photoProfile });
  }, [visitFee, photoProfile]);

  const actualizarValidacion = (completed, data) => {
    setIsValid(completed);
    if (data) {
      setPhotoProfile(data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.label}>Tarifa de visita (S/.)</Text>
          <TextInput
            style={styles.input}
            inputMode="numeric"
            value={visitFee}
            onChangeText={setVisitFee}
            placeholder="Tarifa de Visita"
          ></TextInput>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Foto de peril</Text>
          <UploadProfilePicture onValid={actualizarValidacion} data={photoProfile} typeUser={"TECNICO"}></UploadProfilePicture>
        </View>
      </View>
    </View>
  );
};

export default RegistroPaso3;
