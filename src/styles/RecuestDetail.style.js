import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
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
    topStatusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale * 8,
    },
    categoryLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: scale * 46,
        height: scale * 46,
        borderRadius: scale * 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTexts: {
        marginLeft: scale * 12,
    },
    textCategory: {
        fontSize: font(16),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    textSubId: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop: scale * 2,
    },
    statusBadge: {
        backgroundColor: colors.background,
        paddingHorizontal: scale * 12,
        paddingVertical: scale * 6,
        borderRadius: scale * 8,
    },
    statusBadgeText: {
        color: '#34C759',
        fontSize: font(12),
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: colors.background,
        marginVertical: scale * 20,
    },
    sectionTitle: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginTop: scale*12,
        marginBottom: scale*12,
    },
    tecnicoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: scale*1,
        borderColor: colors.border,
        borderRadius: scale*16,
        padding:scale* 12,
        marginBottom: scale*12,
    },
    avatar: {
        width:scale* 44,
        height: scale*44,
        borderRadius:scale* 22,
    },
    tecnicoInfo: {
        flex: 1,
        marginLeft: scale*12,
    },
    tecnicoName: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    tecnicoRating: {
        fontSize: font(13),
        color: colors.star,
        marginTop:scale* 2,
    },
    reviewsText: {
        color: colors.textSecondary,
    },
    chatButton: {
        width: scale*36,
        height: scale*36,
        borderRadius: scale*10,
        borderWidth: scale*1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale*12,
    },
    mainMetaText: {
        fontSize: font(14),
        color: colors.textPrimary,
        fontWeight: '500',
    },
    subMetaText: {
        fontSize: font(13),
        color: colors.textSecondary,
        marginTop:scale* 2,
    },
    descriptionText: {
        fontSize: font(14),
        color: colors.textSecondary,
        lineHeight: scale*20,
        marginBottom: scale*12,
    },
    imageGrid: {
        flexDirection: 'row',
        gap: scale*10,
        marginBottom: scale*12,
    },
    imageWrapper: {
        flex: 1,
        aspectRatio:scale* 1.2,
        borderRadius:scale* 12,
        overflow: 'hidden',
        position: 'relative',
    },
    gridImage: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color: colors.white,
        fontSize: font(16),
        fontWeight: 'bold',
    },
    infoBox: {
        gap:scale* 12,
        marginTop:scale* 4,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabel: {
        fontSize: font(14),
        color: colors.textSecondary,
    },
    infoValue: {
        fontSize: font(14),
        color: colors.textPrimary,
        fontWeight: '500',
    },
    infoValuePrice: {
        fontSize: font(15),
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        paddingHorizontal: scale*20,
        paddingTop:scale* 12,
        paddingBottom: scale*24,
    },
    btnCancel: {
        height: scale*48,
        borderRadius: scale*12,
        borderWidth: scale*1,
        borderColor: colors.disable,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCancelText: {
        color: colors.disable,
        fontSize: font(15),
        fontWeight: '600',
    },
})