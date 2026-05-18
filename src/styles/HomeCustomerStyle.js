import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: colors.primary
        },

        logged: {
            backgroundColor: colors.primary,
            width: '100%',
            alignItems: 'center',
            height: '22%'
        },
        infoUser: {
            marginTop: 60 * scale,
            marginBottom: 20 * scale,
        },
        welcomeMessage: {
            fontSize: font(22),
            fontWeight: '600',
            color: colors.background,
        },
        searchBar: {
            width: '90%',
            flexDirection: 'row',
            backgroundColor: colors.background,
            borderRadius: 15 * scale,
            height: 50 * scale,
            alignItems: 'center',
        },
        lupa: {
            width: '10%',
            fontSize: font(30),
            textAlign: 'center',
            color: colors.primary
        },
        search: {
            width: '90%',
            height: '100%',
            fontSize: font(22)
        },
        body: {
            backgroundColor: colors.background,
            borderTopRightRadius: 20 * scale,
            borderTopLeftRadius: 20 * scale,
            width: '100%',
            alignItems: 'center',
            height: '88%'
        },
        services: {
            width: '90%',
            marginTop: 10 * scale,
            height: '45%',
        },
        titleService: {
            fontSize: font(25),
            fontWeight: 'bold',
        },
        serviceContainer: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 15 * scale,
            gap: 20 * scale,

        },
        serviceItem: {
            width: '47%',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 20 * scale,
            padding: 10 * scale
        },
        iconService: {
            fontSize: font(40)
        },
        serviceName: {
            fontSize: font(22)
        }
    });
