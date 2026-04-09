import { StyleSheet } from "react-native";
import colors from "./const/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%'
    },
    btnSeguiente: {
        position: 'absolute',
        bottom: 60,
        backgroundColor: colors.primary,
        width: '80%',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default styles;