import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/styles/colors';

import Bienvenida from './src/components/Bienvenida';

export default function App() {
  return (
    <Bienvenida></Bienvenida>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
