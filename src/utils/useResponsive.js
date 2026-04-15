// responsive.js
// Sistema de escalado responsive para React Native

import { useWindowDimensions, PixelRatio } from 'react-native';

// 📌 Tamaño base (puedes cambiarlo según tu diseño)
const BASE_WIDTH = 375;   // iPhone estándar
const BASE_HEIGHT = 812;

// 🔥 Hook principal
export const useResponsive = () => {
    const { width, height } = useWindowDimensions();

    // 📏 Escalas base
    const scaleWidth = width / BASE_WIDTH;
    const scaleHeight = height / BASE_HEIGHT;

    // ⚖️ Escala equilibrada (recomendada)
    const scale = Math.min(scaleWidth, scaleHeight);

    // 🔤 Escala moderada (evita exageraciones)
    const moderateScale = (size, factor = 0.5) => {
        return size + (scale * size - size) * factor;
    };

    // 🔤 Escala de fuentes (con PixelRatio)
    const font = (size) => {
        return Math.round(PixelRatio.roundToNearestPixel(size * scale));
    };

    // 📦 Helpers rápidos
    const wp = (percent) => width * (percent / 100);  // width %
    const hp = (percent) => height * (percent / 100); // height %

    return {
        scale,
        font,
    };
};