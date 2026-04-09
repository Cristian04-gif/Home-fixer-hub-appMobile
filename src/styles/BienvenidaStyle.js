import { StyleSheet } from "react-native";
import colors from "./const/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    header: {
        flex: 1,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '400',
        marginTop: 20,
    },
    body: {
        flex: 5,
        backgroundColor: colors.background,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
    },
    name: {
        color: colors.primary,
        fontSize: 40,
        fontWeight: '700',
    },
    content: {
        flex: 5,
        alignItems: 'center',
        width: '90%',
        gap: 40
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 350
    },
    description: {
        fontSize: 30,
        textAlign: 'center',
        width: 300,
        paddingTop: 20,
        paddingBottom: 20
    },
    button: {
        backgroundColor: colors.success,
        padding: 15,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center'
    },
    textButton: {
        color: colors.background,
        fontSize: 20,
        fontWeight: '500'
    }
});

export default styles;