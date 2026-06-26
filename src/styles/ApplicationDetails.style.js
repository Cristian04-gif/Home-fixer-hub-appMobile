import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.white
        },
        center: {
            flex: 1,
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
        navTitle: {
            fontSize: font(17),
            fontWeight: "bold",
            color: colors.textPrimary
        },
        scrollContent: {
            paddingBottom: scale * 110
        },

        mapContainer: {
            width: "100%",
            height: scale * 220,
            backgroundColor: colors.border,
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },

        customMarkerCircle: {
            width: scale * 30,
            height: scale * 30,
            borderRadius: scale * 15,
            backgroundColor: "rgba(0, 122, 255, 0.2)",
            justifyContent: "center",
            alignItems: "center",
        },
        innerMarkerCircle: {
            width: scale * 14,
            height: scale * 14,
            borderRadius: scale * 7,
            backgroundColor: colors.primary,
            borderWidth: scale * 2,
            borderColor: colors.white,
        },

        categoryPriceRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale * 20,
            marginTop: scale * 16,
        },
        categoryBadge: {
            backgroundColor: colors.background,
            paddingHorizontal: scale * 12,
            paddingVertical: scale * 6,
            borderRadius: scale * 8,
        },
        categoryBadgeText: {
            color: colors.primary,
            fontSize: font(12),
            fontWeight: "600"
        },
        priceText: {
            fontSize: font(18),
            fontWeight: "bold",
            color: colors.primary
        },
        mainJobTitle: {
            fontSize: font(20),
            fontWeight: "bold",
            paddingHorizontal: scale * 20,
            marginTop: scale * 8,
        },
        sectionLabel: {
            fontSize: font(14),
            fontWeight: "bold",
            color: colors.textSecondary,
            paddingHorizontal: scale * 20,
            marginTop: scale * 12,
            marginBottom: scale * 8,
        },
        clienteCard: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: scale * 1,
            borderColor: colors.border,
            borderRadius: scale * 16,
            padding: scale * 12,
            marginHorizontal: scale * 20,
            marginBottom: scale * 12,
            backgroundColor: colors.white,
        },
        avatar: {
            width: scale * 46,
            height: scale * 46,
            borderRadius: scale * 23,
        },
        clienteInfo: {
            flex: 1,
            marginLeft: scale * 12,
        },
        clienteName: {
            fontSize: font(15),
            fontWeight: "bold",
            color: colors.textPrimary,
        },
        clienteRating: {
            fontSize: font(13),
            color: colors.star,
            marginTop: scale * 2,
        },
        reviewsText: {
            color: colors.textSecondary,
        },
        chatButton: {
            width: scale * 38,
            height: scale * 38,
            borderRadius: scale * 12,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
        },
        metaLocationRow: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: scale * 20,
            marginBottom: scale * 12,
        },
        mainMetaText: {
            fontSize: font(14),
            color: colors.textPrimary,
            fontWeight: "500",
        },
        subMetaText: {
            fontSize: font(13),
            color: colors.textSecondary,
            marginTop: scale * 2,
        },
        descriptionText: {
            fontSize: font(14),
            color: colors.textSecondary,
            lineHeight: scale * 20,
            paddingHorizontal: scale * 20,
            marginBottom: scale * 12,
        },
        imageGrid: {
            flexDirection: "row",
            gap: scale * 10,
            paddingHorizontal: scale * 20,
            marginBottom: scale * 12,
        },
        imageWrapper: {
            flex: 1,
            aspectRatio: scale * 1.2,
            borderRadius: scale * 12,
            overflow: "hidden",
        },
        gridImage: {
            width: "100%",
            height: "100%",
        },
        bottomFixedBar: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.white,
            flexDirection: "row",
            paddingHorizontal: scale * 20,
            paddingTop: scale * 12,
            paddingBottom: scale * 24,
            gap: scale * 12,
            borderTopWidth: scale * 1,
            borderColor: colors.border,
        },
        btnRechazar: {
            flex: 1,
            height: scale * 48,
            borderRadius: scale * 12,
            borderWidth: scale * 1,
            borderColor: colors.border,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.white,
        },
        btnAceptar: {
            flex: 1.8,
            height: scale * 48,
            borderRadius: scale * 12,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
        },
        textRechazar: {
            color: "#3A3A3C",
            fontSize: font(15),
            fontWeight: "600",
        },
        textAceptar: {
            color: colors.white,
            fontSize: font(15),
            fontWeight: "600",
        },
    });
