import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.primary
        },
        body: {
            flex: 1,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            justifyContent: 'center',
            alignItems: 'center'
        },
        list: {
            width: '90%',
            marginTop: 20 * scale,
        },
        card: {
            borderWidth: 1,
            marginBottom: 5 * scale,
            borderRadius: 10 * scale,
            padding: 10 * scale,
            borderColor: colors.border,
            flexDirection: 'row'
        },
        img: {
            width: 100 * scale,
            height: 100 * scale,
            borderRadius: 50 * scale,
            marginRight: 20*scale
        },
        name: {
            fontSize: font(20),
            fontWeight: '600'
        },
        description:{
            fontSize: font(13)
        }
    });
