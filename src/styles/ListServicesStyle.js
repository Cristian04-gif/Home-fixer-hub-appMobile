import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            width: '90%'
        },
        title: {
            fontSize: font(22),
            marginTop: 10 * scale,
            marginBottom: 10 * scale,
            fontWeight: "bold",
        },

        btnService: {
            flexDirection: "row",
            padding: 15 * scale,
            borderRadius: 12 * scale,
            marginBottom: 12 * scale,
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
        },
        name: {
            fontSize: font(20),
        },
    });
