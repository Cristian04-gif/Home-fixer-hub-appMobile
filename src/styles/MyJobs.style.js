import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
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
        // Estilos de los Tabs de Control
        tabContainer: {
            flexDirection: 'row',
            borderBottomWidth: scale * 1,
            borderColor: colors.border,
            marginTop: scale * 4,
        },
        tabButton: {
            flex: 1,
            alignItems: 'center',
            paddingVertical: scale * 14,
            borderBottomWidth: scale * 2,
            borderColor: 'transparent',
        },
        activeTabButton: {
            borderColor: colors.primary, // Azul de énfasis inferior de pestaña activa
        },
        tabText: {
            fontSize: font(14),
            fontWeight: '500',
            color: colors.textSecondary,
        },
        activeTabText: {
            color: colors.primary,
            fontWeight: 'bold',
        },
        // Listado y Tarjetas (Cards)
        listContent: {
            paddingHorizontal: scale * 20,
            paddingTop: scale * 16,
            paddingBottom: scale * 40,
        },
        card: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderWidth: scale * 1,
            borderColor: colors.border,
            borderRadius: scale * 16,
            padding: scale * 16,
            marginBottom: scale * 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: scale * 2 },
            shadowOpacity: scale * 0.04,
            shadowRadius: scale * 10,
            elevation: scale * 2,
        },
        cardMainContent: {
            flex: 1,
        },
        cardTitle: {
            fontSize: font(16),
            fontWeight: 'bold',
            color: colors.textPrimary,
        },
        cardSubtitle: {
            fontSize: font(14),
            color: colors.textSecondary,
            marginTop: scale * 4,
        },
        boldText: {
            color: colors.textPrimary,
            fontWeight: '500',
        },
        badge: {
            alignSelf: 'flex-start',
            paddingHorizontal: scale * scale * 10,
            paddingVertical: scale * scale * 4,
            borderRadius: scale * scale * 6,
            marginTop: scale * scale * 8,
            marginBottom: scale * scale * 8,
        },
        badgeProgreso: {
            backgroundColor: '#E8F2FF',
        },
        badgeCompletado: {
            backgroundColor: '#EBF7EE',
        },
        badgeAceptado: {
            backgroundColor: "#F3F4F6",
        },
        badgeText: {
            fontSize: font(12),
            fontWeight: '600',
        },
        badgeTextProgreso: {
            color: colors.primary,
        },
        badgeTextCompletado: {
            color: colors.enable,
        },
        badgeTextAceptado: {
            color: "#4B5563",
        },
        cardMetaText: {
            fontSize: font(13),
            color: colors.textSecondary,
            marginTop: scale * scale * 2,
        },
        cardPrice: {
            fontSize: font(15),
            fontWeight: 'bold',
            color: colors.textPrimary,
            marginTop: scale * 8,
        },
        cardRightArrow: {
            paddingLeft: scale * 8,
        },
        centerLoader: {
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
        },
        emptyText: {
            fontSize: font(14),
            color: colors.textSecondary,
        },
    })