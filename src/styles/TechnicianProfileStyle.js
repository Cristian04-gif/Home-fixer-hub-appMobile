import { StyleSheet } from "react-native";
import colors from "../utils/colors";
export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
        },
        body: {
            flex: 5,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            width: '100%',
            alignItems: 'center'
        },
        profile: {
            flexDirection: 'row',
            marginTop: 40 * scale,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10 * scale,
            width: '90%'
        },
        img: {
            width: 150 * scale,
            height: 150 * scale,
            marginRight: 20 * scale,
            borderRadius: 100 * scale,
            borderWidth: 4,
            borderColor: colors.success
        },
        name: {
            fontSize: font(20),
            fontWeight: '600'
        },
        description: {
            width: '90%',
        },
        title: {
            fontSize: font(17),
            fontWeight: '800',
            marginBottom: 5 * scale
        },
        textDescription: {
            fontSize: font(15),
            color: colors.textSecondary,
            textAlign: 'justify',
            marginBottom: 5 * scale
        },
        
    });
