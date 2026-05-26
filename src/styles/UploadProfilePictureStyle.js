import { StyleSheet } from "react-native";
import colors from "../utils/colors";
export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            alignItems: 'center',
            marginVertical: 20 * scale,
            flex:1
        },
        avatarContainer: {
            width: 200 * scale,
            height: 200 * scale,
            borderRadius: 100 * scale,
            backgroundColor: colors.border,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2 * scale,
            borderColor: colors.primary,
        },
        avatar: {
            width: '100%',
            height: '100%',
        },
        placeholder: {
            alignItems: 'center',
        },
        placeholderText: {
            fontSize: font(12),
            color: colors.primary,
            marginTop: 5 * scale,
        },
    });
