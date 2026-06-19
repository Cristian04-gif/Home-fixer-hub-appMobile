import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    searchSection: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 16,
        paddingBottom: scale * 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        height: scale * 48,
        paddingHorizontal: scale * 12,
    },
    searchIcon: {
        marginRight: scale * 8,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: font(15),
        color: colors.textPrimary,
    },
    flatListContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 12,
        paddingBottom: scale * 24,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        marginBottom: scale * 16,
        borderWidth: scale * 1,
        borderColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        // Sombras nativas ligeras
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 1 },
        shadowOpacity: scale * 0.04,
        shadowRadius: scale * 3,
        elevation: scale * 1,
    },
    iconCircle: {
        width: scale * 48,
        height: scale * 48,
        borderRadius: scale * 14,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start', // Mantiene el icono alineado arriba si el texto crece
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: scale * 14,
    },
    serviceName: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: scale * 4,
    },
    serviceDescription: {
        fontSize: font(13),
        color: colors.textSecondary,
        lineHeight: scale * 18,
        marginBottom: scale * 6,
    },
    tecnicosText: {
        fontSize: font(12),
        color: colors.placeholder,
        fontWeight: '500',
    },
    arrowIcon: {
        alignSelf: 'center',
    },
    emptyText: {
        textAlign: 'center',
        color: colors.placeholder,
        marginTop: scale * 40,
        fontSize: font(14),
    },
})