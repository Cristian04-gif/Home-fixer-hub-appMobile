import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.white
        },
        center: {
            justifyContent: "center",
            alignItems: "center"
        },
        navBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: scale * 16,
            paddingVertical: scale * 12,
        },
        navButton: {
            padding: scale * 4
        },
        navTitle: {
            fontSize: font(17),
            fontWeight: "bold",
            color: colors.textPrimary
        },
        scrollContent: {
            paddingBottom: scale * 100
        },
        headerCard: {
            borderWidth: scale * 1,
            borderColor: colors.border,
            borderRadius: scale * 16,
            padding: scale * 16,
            marginHorizontal: scale * 20,
            marginTop: scale * 8,
            backgroundColor: colors.white,
        },
        badgeContainer: {
            flexDirection: "row",
            marginBottom: scale * 8
        },
        badge: {
            paddingHorizontal: scale * 10,
            paddingVertical: scale * 4,
            borderRadius: scale * 6
        },
        badgeAzul: {
            backgroundColor: "#E8F2FF"
        },
        badgeVerde: {
            backgroundColor: "#EBF7EE"
        },
        badgeText: {
            fontSize: font(12),
            fontWeight: "600"
        },
        badgeTextAzul: {
            color: "#3A6B88"
        },
        badgeTextVerde: {
            color: "#34C759"
        },

        jobTitle: {
            fontSize: font(18),
            fontWeight: "bold",
            color: colors.textPrimary,
            marginBottom: scale * 4,
        },
        customerText: {
            fontSize: font(14),
            color: colors.textSecondary,
            marginBottom: scale * 2
        },
        darkText: {
            color: colors.textPrimary,
            fontWeight: "500"
        },
        addressText: {
            fontSize: font(14),
            color: colors.placeholder
        },
        sectionLabel: {
            fontSize: font(14),
            fontWeight: "bold",
            color: colors.textPrimary,
            paddingHorizontal: scale * 20,
            marginTop: scale * 24,
            marginBottom: scale * 12,
        },

        infoContainer: {
            paddingHorizontal: scale * 20
        },
        infoRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: scale * 10,
            borderBottomWidth: scale * 1,
            borderColor: colors.border,
        },
        infoKey: {
            fontSize: font(14),
            color: colors.textSecondary
        },
        infoValue: {
            fontSize: font(14),
            color: colors.textPrimary,
            fontWeight: "500"
        },
        priceValue: {
            fontSize: font(15),
            fontWeight: "bold",
            color: colors.textPrimary
        },

        /* ESTILOS TIMELINE */
        timelineContainer: {
            paddingHorizontal: scale * 20,
            marginTop: scale * 4
        },
        timelineNode: {
            flexDirection: "row",
            height: scale * 60
        },
        leftTimelineColumn: {
            alignItems: "center",
            width: scale * 30
        },
        connectorLine: {
            width: scale * 2,
            flex: scale * 1,
            backgroundColor: colors.border,
            marginVertical: scale * 4,
        },
        connectorActive: {
            backgroundColor: colors.enable
        },
        rightTimelineColumn: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: scale * 12,
            paddingTop: scale * 1,
        },
        statusTitle: {
            fontSize: font(15),
            fontWeight: "600"
        },
        mutedText: {
            color: colors.placeholder
        },
        statusTime: {
            fontSize: font(13),
            color: colors.placeholder
        },

        /* BOTÓN INFERIOR */
        bottomContainer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.white,
            paddingHorizontal: scale * 20,
            paddingTop: scale * 12,
            paddingBottom: scale * 24,
            borderTopWidth: scale * 1,
            borderColor: colors.border,
        },
        mainActionButton: {
            height: scale * 48,
            borderRadius: scale * 12,
            justifyContent: "center",
            alignItems: "center",
        },
        mainActionButtonText: {
            color: colors.white,
            fontSize: font(16),
            fontWeight: "600"
        },
    });
