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
        padding: 15 * scale,
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
    transportList: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20 * scale,
        marginTop: 20 * scale
    },
    transport: {
        width: "45%",
        height: 100 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * scale,
        borderWidth: 1
    },
    labelTransport: {
        fontSize: font(22),
        fontWeight: '600'
    }
})
