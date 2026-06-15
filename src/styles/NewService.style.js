import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scrollContent: {
            paddingHorizontal: scale * 20,
            paddingTop: scale * 16,
            paddingBottom: scale * 110, // Evita que el botón tape el último input
        },
        inputGroup: {
            marginBottom: scale * 20,
        },
        label: {
            fontSize: font(14),
            color: colors.textPrimary,
            fontWeight: "500",
            marginBottom: scale * 8,
        },
        input: {
            height: scale * 48,
            backgroundColor: colors.white,
            borderRadius: scale * 10,
            borderWidth: scale * 1,
            borderColor: colors.border,
            paddingHorizontal: scale * 14,
            fontSize: font(15),
            color: colors.textPrimary,
        },
        textArea: {
            height: scale * 100,
            paddingTop: scale * 12,
            paddingBottom: scale * 12,
        },
        dropdownTrigger: {
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
        inputText: {
            fontSize: font(15),
            color: colors.textPrimary,
        },
        placeholderText: {
            color: colors.placeholder,
        },
        priceInputContainer: {
            height: scale * 48,
            backgroundColor: colors.white,
            borderRadius: scale * 10,
            borderWidth: scale * 1,
            borderColor: colors.border,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: scale * 14,
        },
        currencySymbol: {
            fontSize: font(15),
            color: colors.textSecondary,
            marginRight: scale * 6,
        },
        priceInput: {
            flex: 1,
            height: "100%",
            fontSize: font(15),
            color: colors.textPrimary,
        },
        uploadCard: {
            height: scale * 120,
            backgroundColor: colors.white,
            borderRadius: scale * 10,
            borderWidth: scale * 1,
            borderColor: colors.border,
            borderStyle: "dashed", // Hace el borde punteado/discontinuo como el mockup
            justifyContent: "center",
            alignItems: "center",
        },
        uploadText: {
            fontSize: font(14),
            fontWeight: "500",
            color: colors.primary,
        },
        buttonContainer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(250, 250, 250, 0.9)",
            paddingHorizontal: scale * 20,
            paddingBottom: scale * 24,
            paddingTop: scale * 12,
        },
        scrollImages: {
            marginVertical: scale * 20,
        },
        image: {
            width: scale * 100,
            height: scale * 100,
            marginRight: scale * 10,
            borderRadius: scale * 10,
        },
        submitButton: {
            backgroundColor: colors.primary,
            borderRadius: scale * 12,
            height: scale * 50,
            justifyContent: "center",
            alignItems: "center",
        },
        submitButtonText: {
            color: colors.white,
            fontSize: font(15),
            fontWeight: "600",
        },
    });
