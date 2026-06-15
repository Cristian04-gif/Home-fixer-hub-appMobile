import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        borderTopRightRadius: 40 * scale,
        borderTopLeftRadius: 40 * scale,

    },
    btnSeguiente: {
        bottom: 60,
        backgroundColor: colors.primary,
        width: '80%',
        height: 55 * scale,
        borderRadius: 15 * scale,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
