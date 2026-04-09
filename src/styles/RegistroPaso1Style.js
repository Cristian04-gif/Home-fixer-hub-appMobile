import { StyleSheet } from "react-native";
import colors from "./const/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    section: {
        width: '90%',
        padding: 20,
        gap: 5,
    },
    textLabel: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600'
    },
    textInput: {
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.border,
    },
    codeNumber: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
    },
    dropdown: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: colors.border
    },
    item: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkbox: {
        width: 25,
        height: 25
    },

})

export default styles;