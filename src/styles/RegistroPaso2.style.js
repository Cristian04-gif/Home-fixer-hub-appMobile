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
        padding: 10 * scale,
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
    password: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eyeButton: {
        position: 'absolute',
        right: 15 * scale
    },
    subtitleConditions: {
        fontSize: font(22),
        fontWeight: '600'
    },
    conditions: {
        fontSize: font(16),
        marginTop: 3 * scale,
    },
    conditionFulfilled: {
        color: colors.success
    }
})
