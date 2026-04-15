import { StyleSheet } from "react-native"
import colors from "../utils/colors"
export const createStyles = ({ scale, font }) => StyleSheet.create({
    switch: {
        marginTop: 10 * scale,
        flexDirection: 'row',
        width: '90%',
        height: 50 * scale,
        backgroundColor: '#E5E7E9',
        borderRadius: 40 * scale,
        position: 'relative',

    },
    activeIndicator: {
        position: 'absolute',
        top: 0,
        left: -2,
        width: '50%',
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: 40 * scale,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: '600',
        color: '#000',
        fontSize: font(25),
    },
    txtActive: {
        color: '#FFF'
    },
})