import { StyleSheet } from "react-native"
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 20,
        paddingBottom: scale * 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: scale * 20,
    },
    greeting: {
        fontSize: font(24),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    subGreeting: {
        fontSize: font(15),
        color: colors.textSecondary,
        marginTop: scale * 4,
    },
    notificationButton: {
        padding: scale * 8,
        borderRadius: scale * 20,
        backgroundColor: colors.white,
        borderWidth: scale * 1,
        borderColor: colors.border,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale * 20,
        gap: scale * 12,
    },
    searchContainer: {
        flex: 1,
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
    filterButton: {
        width: scale * 48,
        height: scale * 48,
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainCard: {
        backgroundColor: colors.primary,
        borderRadius: scale * 16,
        padding: scale * 20,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: scale * 28,
    },
    mainCardContent: {
        zIndex: 2,
    },
    mainCardTitle: {
        color: colors.border,
        fontSize: font(15),
        fontWeight: '500',
    },
    mainCardNumber: {
        color: colors.white,
        fontSize: font(48),
        fontWeight: 'bold',
        marginVertical: scale * 6,
    },
    inlineLink: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainCardLink: {
        color: colors.white,
        fontSize: font(14),
        fontWeight: '600',
    },
    mainCardIcon: {
        position: 'absolute',
        right: scale * 15,
        bottom: scale * 10,
        zIndex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale * 16,
    },
    sectionTitle: {
        fontSize: font(17),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    viewAllText: {
        fontSize: font(13),
        color: '#007AFF',
        fontWeight: '500',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: scale * 16,
        marginBottom: scale * 28,
    },
    categoryItem: {
        alignItems: 'center',
        width: '22%', // Garantiza exactamente 4 columnas por fila distribuidas perfectamente
    },
    iconCircle: {
        width: scale * 52,
        height: scale * 52,
        borderRadius: scale * 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale * 8,
    },
    categoryText: {
        fontSize: font(11),
        color: colors.textPrimary,
        textAlign: 'center',
    },
    promoBanner: {
        backgroundColor: '#F2F6F8', // Fondo azul grisáceo claro muy sutil del mockup
        borderRadius: scale * 16,
        padding: scale * 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: scale * 1,
        borderColor: colors.border,
    },
    promoTextContainer: {
        flex: 1,
        zIndex: 2,
    },
    promoTitle: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    promoSubtitle: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: scale * 4,
        marginBottom: scale * 14,
        lineHeight: scale * 18,
    },
    promoLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promoLinkText: {
        fontSize: font(14),
        fontWeight: '600',
        color: colors.primary,
    },
    promoImageWrapper: {
        position: 'relative',
        width: scale * 90,
        height: scale * 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoImage: {
        width: scale * 80,
        height: scale * 80,
        borderRadius: scale * 40,
        zIndex: 2,
    },
    greenCircleDecoration: {
        position: 'absolute',
        top: scale * -5,
        right: scale * -5,
        width: scale * 24,
        height: scale * 24,
        borderRadius: scale * 12,
        backgroundColor: colors.enable,
        zIndex: 3,
        borderWidth: scale * 3,
        borderColor: '#F2F6F8', // Hace el efecto de separación del mockup
    },
})