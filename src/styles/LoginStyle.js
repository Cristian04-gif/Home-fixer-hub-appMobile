import { StyleSheet } from "react-native"
import colors from "./const/colors"
import fonts from "./const/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    }, body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingTop: 40
    },
    //switch

    //form
    form: {
        width: '90%',
        gap: 20,
        margin: 40,
        marginTop: 50
    },
    textForm: {
        fontSize: fonts.default,
        fontWeight: '700'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        height: 60,
        borderRadius: 10,
        fontSize: fonts.default
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eyeButton: {
        position: 'absolute',
        right: 15
    },

    //login redes
    redesLogin: {
        width: '90%',
        alignItems: 'center',
        padding: 20
    },
    redes: {
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 30
    },
    botonRedSocial: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.cardBg
    },
    redesIcon: {
        width: 60,
        height: 60
    },

    //logs
    logs: {
        width: '90%',
        alignItems: 'center',
        padding: 20,
        marginTop: 30
    },
    btnLogin: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center'
    },
    register: {
        marginTop: 20,
        flexDirection: 'row',
        padding: 20,
        gap: 5,

    }
})

export default styles;