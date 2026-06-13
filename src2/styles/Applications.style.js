import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        borderWidth: scale * 1,
        borderColor: colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 1 },
        shadowOpacity: scale * 0.04,
        shadowRadius: scale * 3,
        elevation: scale * 1,
        margin: scale * 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconCircle: {
        width: scale * 44,
        height: scale * 44,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextContainer: {
        flex: 1,
        paddingHorizontal: scale * 12,
    },
    tagCategoria: {
        backgroundColor: colors.border,
        alignSelf: 'flex-start',
        paddingHorizontal: scale * 8,
        paddingVertical: scale * 2,
        borderRadius: scale * 6,
        marginBottom: scale * 4,
    },
    tagText: {
        fontSize: font(11),
        color: '#3A3A3C',
        fontWeight: '500',
    },
    tituloText: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    horaText: {
        fontSize: font(12),
        color: colors.placeholder,
    },
    cardBody: {
        marginTop: scale * 12,
        marginBottom: scale * 16,
    },
    direccionText: {
        fontSize: font(14),
        color: '#3A3A3C',
        fontWeight: '500',
    },
    distanciaText: {
        fontSize: font(13),
        color: colors.placeholder,
        marginTop: scale * 2,
    },
    precioText: {
        fontSize: font(18),
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: scale * 12,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale * 12,
    },
    btn: {
        flex: 1,
        height: scale * 40,
        borderRadius: scale * 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: scale * 1,
    },
    btnRechazar: {
        backgroundColor: colors.white,
        borderColor: colors.border,
    },
    btnAceptar: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    textRechazar: {
        color: '#3A3A3C',
        fontSize: font(14),
        fontWeight: '600',
    },
    textAceptar: {
        color: colors.white,
        fontSize: font(14),
        fontWeight: '600',
    },
})
