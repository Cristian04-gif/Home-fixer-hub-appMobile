import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
        },
        header: {
            flex: 1,
            width: '100%',
            height: 50 * scale,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textheader: {
            fontSize: font(22),
            color: colors.background,
            fontWeight: 'bold',
            marginTop: 30 * scale
        },
        body: {
            flex: 5,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        me: {
            alignItems: 'center',
            width: '90%'
        },
        mePhoto: {
            width: 150 * scale,
            height: 150 * scale,
            borderRadius: 100 * scale,
            marginBottom: 10 * scale,
            borderWidth: 2,
            borderColor: colors.border
        },
        name: {
            fontSize: font(18),
            fontWeight: '600'
        },
        professions: {
            width: '90%',
            marginTop: 10 * scale,
        },
        professionsTitle: {
            fontSize: font(15),
            fontWeight: 'bold',
            marginBottom: 10 * scale
        },
        serviceItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8 * scale,
            height: 40 * scale,
            backgroundColor: colors.cardBg,
            borderWidth: 1,
            borderRadius: 8 * scale,
            borderColor: colors.border
        },
        nameService: {
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            gap: 10 * scale,
            width: '90%',
            justifyContent: 'center'
        },
        textService: {
            fontSize: font(15),

        },
        btnDelete: {
            position: 'absolute',
            right: 0,
            borderRadius: 8 * scale,
            backgroundColor: '#FF7F7F',
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        newService: {
            flexDirection: 'row',
            width: '60%',
            height: 40 * scale,
            borderRadius: 10 * scale,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            marginLeft: 135 * scale
        },
        textBtnNew: {
            fontSize: font(15),
            marginLeft: 8 * scale,
            color: 'white',
        },

        btns: {
            width: '90%',
            marginTop: 10 * scale,
            alignItems: 'center',
            gap: 10 * scale,
            marginTop: 20 * scale
        },
        btnEdit: {
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40 * scale,
            borderRadius: 10 * scale,
            backgroundColor: colors.success
        },
        btnLogaut: {
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40 * scale,
            borderRadius: 10 * scale,
            backgroundColor: '#FF7F7F'
        },
        textBtn:{
            fontSize: font(18)
        }
    });


