import { PixelRatio, useWindowDimensions } from "react-native";

const density = PixelRatio.get();

const font = density <= 2 ? 25 : 29;

const fonts = {
    title: font + 20,
    description: font+5,
    default: font,
    text: font - 5
};

export default fonts;