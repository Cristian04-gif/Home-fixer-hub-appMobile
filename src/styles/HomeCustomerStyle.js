import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: colors.primary
        },

        logged: {
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
        },
        img: {
            width: 60 * scale,
            height: 60 * scale,
            borderRadius: 50 * scale,
            borderColor: colors.border,
            borderWidth: 2,
            marginRight: 5 * scale
        },
        welcomeMessage: {
            color: colors.background,
            fontSize: font(22)
        },
        body: {
            flex: 5,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
