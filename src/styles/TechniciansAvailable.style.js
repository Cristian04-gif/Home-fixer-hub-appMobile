import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headerContainer: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 16,
        paddingBottom: scale * 8,
    },
    contadorText: {
        fontSize: font(14),
        color: colors.textSecondary,
        fontWeight: '500',
        marginBottom: scale * 16,
    },
    chipsRow: {
        flexDirection: 'row',
        gap: scale * 8,
        marginBottom: scale * 12,
    },
    chip: {
        paddingHorizontal: scale * 16,
        paddingVertical: scale * 8,
        borderRadius: scale * 20,
        backgroundColor: colors.white,
        borderWidth: scale * 1,
        borderColor: colors.border,
    },
    chipActivo: {
        backgroundColor: colors.primary, // El color azul oscuro de identidad de tu app
        borderColor: colors.primary,
    },
    chipText: {
        fontSize: font(13),
        color: colors.textPrimary,
        fontWeight: '500',
    },
    chipTextActivo: {
        color: colors.white,
    },
    flatListContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 8,
        paddingBottom: scale * 24,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        marginBottom: scale * 16,
        borderWidth: scale * 1,
        borderColor: colors.border,
        // Sombras sutiles nativas
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 1 },
        shadowOpacity: scale * 0.03,
        shadowRadius: scale * 4,
        elevation: scale * 1,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: scale * 68,
        height: scale * 68,
        borderRadius: scale * 34,
        backgroundColor: colors.background,
    },
    infoContainer: {
        flex: 1,
        paddingLeft: scale * 16,
        paddingRight: scale * 8,
    },
    nombreText: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.primary, // Mantiene la consistencia de color en títulos primarios
        marginBottom: scale * 4,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale * 4,
        gap: scale * 4,
    },
    ratingText: {
        fontSize: font(13),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    reseñasText: {
        fontSize: font(13),
        color: colors.textSecondary,
    },
    distanciaText: {
        fontSize: font(13),
        color: colors.textSecondary,
    },
    precioText: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: 6,
    },
    montoText: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.primary,
    },
    arrowIcon: {
        alignSelf: 'center',
    },
})