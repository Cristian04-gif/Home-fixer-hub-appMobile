import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        paddingBottom: scale * 100, // Espacio preventivo para que el contenido no quede oculto tras la barra fija
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
    backButton: {
        position: 'absolute',
        left: scale * 10,
        top: scale * 50,
        alignSelf: 'flex-start',
        padding: scale * 4,
    },
    profileCard: {
        alignItems: 'center',
        marginTop: scale * -55,
        marginBottom: scale * 20,
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
        borderColor: colors.white,
    },
    favoriteButton: {
        position: 'absolute',
        bottom: scale * 2,
        right: scale * 2,
        backgroundColor: colors.white,
        width: scale * 30,
        height: scale * 30,
        borderRadius: scale * 15,
        justifyContent: 'center',
        alignItems: 'center',
        // Sombra del botón flotante de estrella
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 2 },
        shadowOpacity: scale * 0.15,
        shadowRadius: scale * 3,
        elevation: scale * 3,
    },
    nameText: {
        fontSize: font(22),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    specialtyText: {
        fontSize: font(14),
        color: colors.textSecondary,
        marginTop: scale * 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale * 8,
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
    metaSection: {
        paddingHorizontal: scale * 24,
        gap: scale * 12,
        marginBottom: scale * 16,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale * 10,
    },
    metaText: {
        fontSize: font(14),
        color: '#3A3A3C',
        fontWeight: '500',
    },
    badgeContainer: {
        flexDirection: 'row',
        marginTop: scale * 4,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBF7EE',
        paddingHorizontal: scale * 10,
        paddingVertical: scale * 5,
        borderRadius: scale * 8,
        gap: scale * 6,
    },
    badgeText: {
        color: colors.enable,
        fontSize: font(13),
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginHorizontal: scale * 24,
        marginVertical: scale * 16,
    },
    sectionContainer: {
        paddingHorizontal: scale * 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scale * 16,
    },
    sectionTitle: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    viewAllText: {
        fontSize: font(13),
        color: colors.primary,
        fontWeight: '500',
    },
    serviceCheckRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale * 12,
        marginBottom: scale * 14,
    },
    serviceCheckText: {
        fontSize: font(14),
        color: '#3A3A3C',
        fontWeight: '400',
    },
    aboutText: {
        fontSize: font(14),
        color: colors.textSecondary,
        lineHeight: scale * 22,
    },
    imgs: {
        width: scale * 150,
        height: scale * 150,
        borderRadius: scale * 15,
        marginTop: scale * 15
    },
    fixedBottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingHorizontal: scale * 20,
        paddingTop: scale * 12,
        paddingBottom: scale * 24, // Mayor margen inferior para adaptarse a pantallas con notch
        gap: scale * 12,
        borderTopWidth: scale * 1,
        borderColor: colors.border,
    },
    btnMensaje: {
        flex: 1,
        height: scale * 48,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: scale * 1,
        borderColor: colors.primary,
        backgroundColor: colors.white,
    },
    btnSolicitar: {
        flex: 2, // Distribución asimétrica: el botón de acción principal toma el doble de espacio
        height: scale * 48,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.success, // Tono verde del mockup para solicitar servicio
    },
    textMensaje: {
        color: colors.primary,
        fontSize: font(15),
        fontWeight: '600',
    },
    textSolicitar: {
        color: colors.white,
        fontSize: font(15),
        fontWeight: '600',
    },
})