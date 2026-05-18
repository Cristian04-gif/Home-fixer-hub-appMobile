import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { createStyles } from "../styles/RegistroPaso3Style";
import { useResponsive } from "../utils/useResponsive";

const TRANSPORT = [
  {
    name: "walking",
    description: "A pie",
    value: "A_PIE",
    color: "#1A73E8",
    background: "#D2E3FC",
  },
  {
    name: "bicycle",
    description: "Bicicleta",
    value: "BICICLETA",
    color: "#0D9E6E",
    background: "#C8F0E3",
  },
  {
    name: "motorcycle",
    description: "Motocicleta",
    value: "MOTOCICLETA",
    color: "#E8710A",
    background: "#FDDCB5",
  },
  {
    name: "car-side",
    description: "Auto",
    value: "AUTOMOVIL",
    color: "#5C35C5",
    background: "#DDD6F7",
  },
  {
    name: "shuttle-van",
    description: "Camioneta",
    value: "CAMIONETA",
    color: "#1E1E1E",
    background: "#E0E0E0",
  },
  {
    name: "bus",
    description: "Bus",
    value: "BUS",
    color: "#C62828",
    background: "#FFCDD2",
  },
];
const RegistroPaso3 = ({ onValid, data }) => {
  const responsive = useResponsive();
  const styles = createStyles(responsive);

  const [visitFee, setVisitFee] = useState(data.visitFee || 0.0);
  const [meansTransport, setMeansTransport] = useState(
    data.meansTransport || "",
  );
  useEffect(() => {
    const esValido = visitFee > 0 && meansTransport.length > 0;
    onValid(esValido, { visitFee, meansTransport });
  }, [visitFee, meansTransport]);

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
          <Text style={styles.label}>Medio de transporte</Text>
          <View style={styles.transportList}>
            {TRANSPORT.map((transporte) => {
              return (
                <Pressable
                  key={transporte.name}
                  style={[
                    styles.transport,
                    {
                      backgroundColor: transporte.background,
                      borderColor: transporte.color,
                    },
                    meansTransport === transporte.value && {
                      backgroundColor: transporte.color,
                      borderColor: "#000",
                    },
                  ]}
                  onPress={() => setMeansTransport(transporte.value)}
                >
                  <FontAwesome5
                    name={transporte.name}
                    size={40 * responsive.scale}
                    color={transporte.color}
                    style={[
                      transporte.color,
                      meansTransport === transporte.value && {
                        color: transporte.background,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.labelTransport,
                      { color: transporte.color },
                      meansTransport === transporte.value && {
                        color: transporte.background,
                      },
                    ]}
                  >
                    {transporte.description}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegistroPaso3;
