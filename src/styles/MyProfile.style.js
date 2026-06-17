import { StyleSheet } from "react-native"
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingBottom: scale * 40,
    },
    topHeader: {
        position: 'relative',
        height: scale * 140,
        alignItems: 'flex-end',
    },
    topWave: {
        position: 'absolute',
        width: '110%',
        height: '200%',
        top: scale * -8,
        left: scale * -4,

    },
    notificationButton: {
        padding: scale * 4,
    },
    profileCard: {
        alignItems: 'center',
        marginTop: scale * -55, // Empuja el contenido hacia arriba para montar el avatar sobre el fondo azul
        marginBottom: scale * 24,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: scale * 12,
    },
    avatar: {
        width: scale * 100,
        height: scale * 100,
        borderRadius: scale * 50,
        borderWidth: scale * 4,
        borderColor: colors.white, // Borde blanco grueso característico
    },
    editButton: {
        position: 'absolute',
        bottom: scale * 2,
        right: scale * 2,
        backgroundColor: colors.primary,
        width: scale * 26,
        height: scale * 26,
        borderRadius: scale * 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: scale * 2,
        borderColor: colors.white,
    },
    nameText: {
        fontSize: font(20),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    roleText: {
        fontSize: font(14),
        color: colors.textSecondary,
        marginTop: scale * 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale * 6,
    },
    star: {
        fontSize: font(14),
        marginRight: scale * 4,
    },
    ratingText: {
        fontSize: font(14),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    reviewsText: {
        fontSize: font(14),
        color: colors.textSecondary,
    },
    availabilityCard: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        marginHorizontal: scale * 20,
        borderWidth: scale * 1,
        borderColor: colors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale * 24,
    },
    sectionTitle: {
        fontSize: font(14),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    availabilitySub: {
        fontSize: font(14),
        fontWeight: '500',
        marginTop: scale * 4,
    },
    servicesSection: {
        marginHorizontal: scale * 20,
        marginBottom: scale * 24,
    },
    rowJustified: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsTitle: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
     viewAllText: {
        fontSize: font(13),
        color: '#007AFF',
        fontWeight: '500',
    },
    servicesGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale * 14,
    },
    serviceItem: {
        alignItems: 'center',
        width: '18%',
    },
    iconCircle: {
        width: scale * 46,
        height: scale * 46,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale * 6,
    },
    iconText: {
        fontSize: font(15),
    },
    serviceText: {
        fontSize: font(10),
        color: colors.textPrimary,
        textAlign: 'center',
    },
    plusText: {
        fontSize: font(14),
        fontWeight: '600',
        color: colors.textPrimary,
    },
    menuContainer: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        marginHorizontal: scale * 20,
        borderWidth: scale * 1,
        borderColor: colors.border,
        paddingHorizontal: scale * 16,
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: scale * 14,
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuRowTitle: {
        fontSize: font(15),
        color: colors.textPrimary,
        fontWeight: '500',
        marginLeft: scale * 14,
    },
    divider: {
        height: scale * 1,
        backgroundColor: colors.border,
    },
})