import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import { Platform } from 'react-native';
export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale * 16,
        paddingVertical: scale * 12,
    },
    backButton: {
        padding: scale * 4,
    },
    navTitle: {
        fontSize: font(17),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    scrollContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 12,
        paddingBottom: scale * 100,
    },
    /* ESTILOS CARD SUPERIOR */
    successCard: {
        backgroundColor: colors.background,
        borderRadius: scale * 20,
        paddingVertical: scale * 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: scale * 1,
        borderColor: colors.border,
        marginBottom: scale * 28,
    },
    successCircleOuter: {
        width: scale * 80,
        height: scale * 80,
        borderRadius: scale * 40,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale * 16,
    },
    successCircleInner: {
        width: scale * 60,
        height: scale * 60,
        borderRadius: scale * 30,
        backgroundColor: colors.success, // Verde característico de tu UI
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: colors.white,
        fontSize: font(30),
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 0 : scale * -2,
    },
    successTitle: {
        fontSize: font(18),
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom:scale* 4,
    },
    successSubtitle: {
        fontSize: font(14),
        color: colors.textSecondary,
    },
    sectionLabel: {
        fontSize: font(14),
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom:scale* 12,
        marginTop: scale*8,
    },
    /* ESTILOS INTERFAZ DE CALIFICACIÓN */
    ratingRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scale*28,
    },
    starsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starButton: {
        marginRight: scale*8,
    },
    ratingNumberBadge: {
        backgroundColor: colors.background,
        paddingHorizontal: scale*12,
        paddingVertical:scale* 6,
        borderRadius:scale* 10,
        minWidth: scale*44,
        alignItems: 'center',
    },
    ratingNumberText: {
        fontSize: font(15),
        fontWeight: '600',
        color: colors.textPrimary,
    },
    /* ESTILOS COMPONENTE COMENTARIO */
    inputContainer: {
        borderWidth: scale*scale*1,
        borderColor: '#E5E5EA',
        borderRadius:scale*scale* 14,
        backgroundColor: colors.white,
        padding:scale*scale* 12,
        height: scale*scale*140,
        justifyContent: 'space-between',
    },
    textArea: {
        flex: 1,
        fontSize: font(14),
        color: colors.textPrimary,
        paddingTop: scale*scale*0,
    },
    charCounter: {
        alignSelf: 'flex-end',
        fontSize: font(11),
        color: colors.textSecondary,
    },
    /* ACCIÓN FIJA INFERIOR */
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        paddingHorizontal: scale*20,
        paddingTop: scale*12,
        paddingBottom: scale*24,
        borderTopWidth: scale*1,
        borderColor: colors.background,
    },
    submitButton: {
        backgroundColor: colors.success, // Verde corporativo de confirmación
        height: scale*48,
        borderRadius: scale*12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: colors.white,
        fontSize: font(16),
        fontWeight: '600',
    },
})