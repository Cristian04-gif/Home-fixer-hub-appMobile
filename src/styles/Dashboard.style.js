import { StyleSheet } from "react-native"
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingHorizontal: scale * 20,
        paddingBottom: scale * 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: scale * 20,
        marginBottom: scale * 25,
    },
    greeting: {
        fontSize: font(24),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    subGreeting: {
        fontSize: font(16),
        color: colors.textSecondary,
        marginTop: scale * 4,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale * 8,
    },
    statusDot: {
        width: scale * 8,
        height: scale * 8,
        borderRadius: scale * 4,
        marginRight: scale * 6,
    },
    statusText: {
        fontSize: font(14),
        color: '#3A3A3C',
    },
    notificationButton: {
        padding: scale * 8,
        borderRadius: scale * 20,
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 1 },
        shadowOpacity: scale * 0.1,
        shadowRadius: scale * 2,
        elevation: scale * 2,
    },
    mainCard: {
        backgroundColor: colors.primary,
        borderRadius: scale * 16,
        padding: scale * 20,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: scale * 16,
    },
    mainCardContent: {
        zIndex: 2,
    },
    mainCardTitle: {
        color: '#E5E5EA',
        fontSize: font(15),
        fontWeight: '500',
    },
    mainCardNumber: {
        color: colors.white,
        fontSize: font(48),
        fontWeight: 'bold',
        marginVertical: scale * 10,
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
        bottom: scale * 15,
        zIndex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scale * 16,
    },
    halfCard: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        width: '48%',
        padding: scale * 16,
        borderWidth: scale * 1,
        borderColor: '#E5E5EA',
    },
    cardLabel: {
        fontSize: font(14),
        color: colors.textPrimary,
        fontWeight: '600',
    },
    cardNumberBlue: {
        fontSize: font(36),
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: scale * 10,
    },
    completedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    miniLabel: {
        fontSize: font(12),
        color: colors.textSecondary,
        marginBottom: scale * 6,
    },
    rowJustified: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsCard: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        borderWidth: scale * 1,
        borderColor: '#E5E5EA',
        marginBottom: scale * 16,
    },
    statsTitle: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    statItemLabel: {
        fontSize: font(14),
        color: colors.textSecondary,
    },
    statItemValue: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    divider: {
        height: scale * 1,
        backgroundColor: '#E5E5EA',
        verticalAlign: 'middle',
        marginVertical: scale * 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        fontSize: font(14),
        marginRight: scale * 4,
    },
    ratingValue: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    availabilityCard: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        borderWidth: scale * 1,
        borderColor: '#E5E5EA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale * 24,
    },
    availabilitySub: {
        fontSize: font(14),
        color: colors.textPrimary,
        marginTop: scale * 4,
    },
    servicesSection: {
        marginBottom: scale * 10,
    },
    viewAllText: {
        fontSize: font(13),
        color: '#007AFF',
        fontWeight: '500',
    },
    servicesGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale * 16,
    },
    serviceItemContainer: {
        alignItems: 'center',
        width: '18%',
    },
    iconCircle: {
        width: scale * 48,
        height: scale * 48,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale * 8,
    },
    iconText: {
        fontSize: font(15),
    },
    serviceText: {
        fontSize: font(11),
        color: '#3A3A3C',
        textAlign: 'center',
    },
    plusMoreText: {
        fontSize: font(14),
        fontWeight: '600',
        color: '#3A3A3C',
    },
})