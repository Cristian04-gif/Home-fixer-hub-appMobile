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
        header: {
            flex: 1,
            width: '100%',
            height: 50 * scale,
            alignItems: 'center',
            justifyContent: 'center',

        },
        title: {
            color: '#fff',
            fontSize: font(25),
            fontWeight: '400',
            marginTop: 20 * scale,

        },
        body: {
            flex: 5,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10 * scale,

        },
        logo: {
            width: 70 * scale,
            height: 70 * scale,
            resizeMode: 'cover',

        },
        name: {
            color: colors.primary,
            fontSize: font(35),
            fontWeight: '700',
        },
        content: {
            flex: 5,
            alignItems: 'center',
            width: '100%',
            gap: 30 * scale,
        },
        image: {
            resizeMode: 'contain',
            width: '100%',
            height: 340 * scale,
        },
        description: {
            fontSize: font(25),
            textAlign: 'center',
            width: 290 * scale,

        },
        button: {
            backgroundColor: colors.success,
            padding: 15 * scale,
            borderRadius: 15 * scale,
            width: '90%',
            alignItems: 'center'
        },
        textButton: {
            color: colors.background,
            fontSize: font(20),
            fontWeight: '500'
        }
    });


