import { StyleSheet } from "react-native"
import colors from "../utils/colors";

export const createStyles = ({scale, font}) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    }, body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        borderTopRightRadius: 30 * scale,
        borderTopLeftRadius: 30 * scale,
        paddingTop: 30 * scale
    },
    form: {
        width: '90%',
        gap: 10 * scale,
        margin: 30 * scale,
        marginTop: 30 * scale
    },
    textForm: {
        fontSize: font(22),
        fontWeight: '700'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        height: 50 * scale,
        borderRadius: 10 * scale,
        fontSize: font(22)
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    eyeButton: {
        position: 'absolute',
        right: 15 * scale
    },
    redesLogin: {
        width: '90%',
        alignItems: 'center',
    },
    redes: {
        marginTop: 20 * scale,
        marginBottom: scale,
        flexDirection: 'row',
        gap: 20 * scale
    },
    botonRedSocial: {
        padding: 10 * scale,
        borderWidth: 2 * scale,
        borderRadius: 10 * scale,
        borderColor: colors.cardBg
    },
    redesIcon: {
        width: 50 * scale,
        height: 50 * scale
    },
    logs: {
        width: '90%',
        alignItems: 'center',
        padding: 20 * scale,
        marginTop: 30 * scale
    },
    btnLogin: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 55 * scale,
        borderRadius: 10 * scale,
        justifyContent: 'center'
    },
    register: {
        marginTop: 20 * scale,
        flexDirection: 'row',
        padding: 20 * scale,
        gap: 5 * scale,

    }
})
