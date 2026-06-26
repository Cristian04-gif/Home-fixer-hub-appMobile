import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    screenHeader: {
        alignItems: 'center',
        paddingVertical: scale * 16,
        backgroundColor: colors.white,
    },
    screenTitle: {
        fontSize: font(18),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    tabsContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderBottomWidth: scale * 1,
        borderColor: colors.border,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: scale * 14,
        borderBottomWidth: scale * 2,
        borderColor: 'transparent',
    },
    tabActiva: {
        borderColor: colors.primary, // Línea inferior azul oscura característica del mockup
    },
    tabText: {
        fontSize: font(13),
        color: colors.textSecondary,
        fontWeight: '500',
    },
    tabTextActivo: {
        color: colors.primary,
        fontWeight: '700',
    },
    flatListContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 16,
        paddingBottom: scale * 24,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale * 40,
    },
    emptyText: {
        color: colors.textSecondary,
        fontSize: font(14),
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        marginBottom: scale * 16,
        borderWidth: scale * 1,
        borderColor: colors.border,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconCircle: {
        width: scale * 44,
        height: scale * 44,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        paddingLeft: scale * 12,
        flex: 1,
    },
    categoriaText: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    tecnicoText: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: scale * 2,
    },
    badge: {
        paddingHorizontal: scale * 10,
        paddingVertical: scale * 4,
        borderRadius: scale * 8,
    },
    badgeEnCurso: {
        backgroundColor: colors.background,
    },
    badgeCompletada: {
        backgroundColor: colors.background,
    },
    badgeText: {
        fontSize: font(12),
        fontWeight: '600',
    },
    badgeTextEnCurso: {
        color: '#007AFF',
    },
    badgeTextCompletada: {
        color: '#34C759',
    },
    cardBody: {
        marginVertical: scale * 12,
        paddingLeft: scale * 2,
    },
    bodyTextMain: {
        fontSize: font(14),
        color: colors.textPrimary,
        fontWeight: '500',
    },
    bodyTextSub: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: scale * 2,
    },
    precioText: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: scale * 10,
    },
    detailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingVertical: scale * 4,
    },
    detailButtonText: {
        fontSize: font(13),
        color: colors.primary,
        fontWeight: '600',
    },
})