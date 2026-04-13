import { StyleSheet } from "react-native";
import colors from "./const/colors";
import fonts from "./const/fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    section: {
        width: '90%',
        padding: 15,
        gap: 5,
        borderWidth:1
    },
    label: {
        fontSize: fonts.default,
        fontWeight: '600'
    },
    input: {
        fontSize: fonts.default,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.border,
        width: '100%'
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eyeButton: {
        position: 'absolute',
        right: 15
    },
    subtitleConditions:{
        fontSize: fonts.default,
        fontWeight: '600'
    },
    conditions:{
        fontSize: fonts.text,
        marginTop: 3,
    },
    conditionFulfilled:{
        color: colors.success
    }
})

export default styles;