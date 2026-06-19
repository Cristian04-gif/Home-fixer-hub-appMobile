import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale * 16,
        paddingVertical: scale * 12,
        borderBottomWidth: scale * 1,
        borderColor: colors.border,
    },
    backButton: {
        padding: scale * 4,
    },
    headerTitle: {
        fontSize: font(17),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    scrollContent: {
        paddingHorizontal: scale * 20,
        paddingTop: scale * 16,
        paddingBottom: scale * 110, // Espacio suficiente para no chocar con el botón fijo
    },
    tecnicoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: scale * 14,
        padding: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        marginBottom: scale * 20,
    },
    avatar: {
        width: scale * 48,
        height: scale * 48,
        borderRadius: scale * 24,
        backgroundColor: colors.border,
    },
    tecnicoInfo: {
        paddingLeft: scale * 12,
    },
    tecnicoServicio: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    tecnicoNombre: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: scale * 2,
    },
    formGroup: {
        marginBottom: scale * 20,
    },
    label: {
        fontSize: font(14),
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: scale * 8,
    },
    dropdown: {
        height: scale * 48,
        backgroundColor: colors.white,
        borderRadius: scale * 10,
        borderWidth: scale * 1,
        borderColor: colors.border,
        paddingHorizontal: scale * 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dropdownItem:{
        height: scale * 48,
        backgroundColor: colors.white,
        borderRadius: scale * 10,
        borderColor: colors.border,
        paddingHorizontal: scale * 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    optionalLabel: {
        fontWeight: '400',
        color: colors.textSecondary,
    },
    textAreaContainer: {
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        paddingHorizontal: scale * 12,
        paddingVertical: scale * 10,
        minHeight: scale * 100,
    },
    textArea: {
        fontSize: font(14),
        color: colors.textPrimary,
        height: '40%',
    },
    selectorInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        paddingHorizontal: scale * 16,
        paddingVertical: scale * 12,
    },
    selectorLeft: {
        flex: 1,
    },
    selectorMainText: {
        fontSize: font(14),
        color: colors.textPrimary,
        fontWeight: '500',
    },
    selectorSubText: {
        fontSize: font(12),
        color: colors.textSecondary,
        marginTop: scale * 2,
    },
    selectorInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: colors.border,
        paddingHorizontal: scale * 16,
        height: scale * 48,
    },
    placeholderText: {
        fontSize: font(14),
        color: colors.textSecondary,
    },
    dashedUploadBox: {
        height: scale * 80,
        backgroundColor: colors.white,
        borderRadius: scale * 12,
        borderWidth: scale * 1,
        borderColor: '#B0C4DE', // Tono azul claro para el borde punteado
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        gap: scale * 6,
    },
    uploadText: {
        fontSize: font(13),
        color: colors.primary,
        fontWeight: '500',
    },
    fixedBottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        paddingHorizontal: scale * 20,
        paddingTop: scale * 12,
        paddingBottom: scale * 24, // Espaciado seguro para pantallas modernas
        borderTopWidth: scale * 1,
        borderColor: colors.border,
    },
    btnEnviar: {
        backgroundColor: '#4A9F76', // Tono verde del botón principal en el mockup
        height: scale * 48,
        borderRadius: scale * 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEnviar: {
        color: colors.white,
        fontSize: font(15),
        fontWeight: '600',
    },
})