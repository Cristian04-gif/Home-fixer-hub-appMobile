import { StyleSheet } from "react-native"
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 10,
        paddingBottom: scale * 100,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: scale * 16,
        padding: scale * 16,
        marginBottom: scale * 16,
        borderWidth: scale * 1,
        borderColor: colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: scale * 1 },
        shadowOpacity: scale * 0.05,
        shadowRadius: scale * 4,
        elevation: scale * 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconCircle: {
        width: scale * 48,
        height: scale * 48,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: scale * 12,
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
    },
    priceText: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.primary, // Azul idéntico a los precios de la UI
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: scale * 12,
    },
    activoText: {
        fontSize: font(13),
        fontWeight: '500',
        marginRight: scale * 8,
    },
    switchScale: {
        transform: [{ scaleX: scale * 0.9 }, { scaleY: scale * 0.9 }], // Hace el switch ligeramente más sutil para encajar con el diseño
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(250, 250, 250, 0.9)', // Fondo semitransparente detrás del botón
        paddingHorizontal: scale * 20,
        paddingBottom: scale * 24,
        paddingTop: scale * 12,
    },
    addButton: {
        backgroundColor: colors.primary, // El mismo azul pizarra del dashboard
        borderRadius: scale * 12,
        height: scale * 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: colors.white,
        fontSize: font(15),
        fontWeight: '600',
    },
})