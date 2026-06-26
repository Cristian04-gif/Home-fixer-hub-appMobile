import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: "#FFF" },
        center: { justifyContent: "center", alignItems: "center" },
        navBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        navButton: { padding: 4 },
        navTitle: { fontSize: 17, fontWeight: "bold", color: "#1C1C1E" },
        scrollContent: { paddingBottom: 100 },

        headerCard: {
            borderWidth: 1,
            borderColor: "#E5E5EA",
            borderRadius: 16,
            padding: 16,
            marginHorizontal: 20,
            marginTop: 8,
            backgroundColor: "#FFF",
        },
        badgeContainer: { flexDirection: "row", marginBottom: 8 },
        badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
        badgeAzul: { backgroundColor: "#E8F2FF" },
        badgeVerde: { backgroundColor: "#EBF7EE" },
        badgeText: { fontSize: 12, fontWeight: "600" },
        badgeTextAzul: { color: "#3A6B88" },
        badgeTextVerde: { color: "#34C759" },

        jobTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#1C1C1E",
            marginBottom: 4,
        },
        customerText: { fontSize: 14, color: "#6E6E73", marginBottom: 2 },
        darkText: { color: "#1C1C1E", fontWeight: "500" },
        addressText: { fontSize: 14, color: "#8E8E93" },
        sectionLabel: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#1C1C1E",
            paddingHorizontal: 20,
            marginTop: 24,
            marginBottom: 12,
        },

        infoContainer: { paddingHorizontal: 20 },
        infoRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: "#F2F2F7",
        },
        infoKey: { fontSize: 14, color: "#6E6E73" },
        infoValue: { fontSize: 14, color: "#1C1C1E", fontWeight: "500" },
        priceValue: { fontSize: 15, fontWeight: "bold", color: "#1C1C1E" },

        /* ESTILOS TIMELINE */
        timelineContainer: { paddingHorizontal: 20, marginTop: 4 },
        timelineNode: { flexDirection: "row", height: 60 },
        leftTimelineColumn: { alignItems: "center", width: 30 },
        connectorLine: {
            width: 2,
            flex: 1,
            backgroundColor: "#E5E5EA",
            marginVertical: 4,
        },
        connectorActive: { backgroundColor: "#4CAF50" },
        rightTimelineColumn: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: 12,
            paddingTop: 1,
        },
        statusTitle: { fontSize: 15, fontWeight: "600" },
        mutedText: { color: "#8E8E93" },
        statusTime: { fontSize: 13, color: "#8E8E93" },

        /* BOTÓN INFERIOR */
        bottomContainer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#FFF",
            paddingHorizontal: 20,
            paddingTop: 12,
            paddingBottom: 24,
            borderTopWidth: 1,
            borderColor: "#F2F2F7",
        },
        mainActionButton: {
            height: 48,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
        },
        mainActionButtonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
    });
