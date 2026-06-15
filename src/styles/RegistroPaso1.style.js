import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
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
        padding: 5 * scale,
        gap: 5 * scale,
    },
    label: {
        fontSize: font(22),
        fontWeight: '600'
    },
    input: {
        fontSize: font(22),
        borderWidth: scale,
        borderRadius: 10 * scale,
        borderColor: colors.border,
        width: '100%'
    },
    codeNumber: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: scale,
        borderColor: colors.border,
        borderRadius: 10 * scale,
    },
    dropdown: {
        paddingLeft: 10 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: scale,
        borderColor: colors.border
    },
    item: {
        padding: 10 * scale,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkbox: {
        width: 25 * scale,
        height: 25 * scale,

    },
    textLabelCheckBox: {
        fontSize: font(20)
    }

})
