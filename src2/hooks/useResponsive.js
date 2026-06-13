
import { useWindowDimensions, PixelRatio } from 'react-native';

const BASE_WIDTH = 375; 
const BASE_HEIGHT = 812;

export const useResponsive = () => {
    const { width, height } = useWindowDimensions();

    const scaleWidth = width / BASE_WIDTH;
    const scaleHeight = height / BASE_HEIGHT;

    const scale = Math.min(scaleWidth, scaleHeight);

    const moderateScale = (size, factor = 0.5) => {
        return size + (scale * size - size) * factor;
    };

    const font = (size) => {
        return Math.round(PixelRatio.roundToNearestPixel(size * scale));
    };


    return {
        scale,
        font,
    };
};