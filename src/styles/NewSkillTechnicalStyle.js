import { StyleSheet } from "react-native";
import colors from "../utils/colors";

export const createStyles = ({ scale, font }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.primary,
        },
        body: {
            flex: 1,
            backgroundColor: colors.background,
            borderTopRightRadius: 30 * scale,
            borderTopLeftRadius: 30 * scale,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 50 * scale,
            gap: 20 * scale
        },
        section: {
            width: '90%',
            gap: 10 * scale
        },
        label: {
            fontSize: font(22),
            fontWeight: '600',
        },
        dropdown: {
            borderWidth: 1,
            padding: 10 * scale,
            borderRadius: 10 * scale,
            
        },
        dropdownItem: {
            padding: 10 * scale,
        },
        dropdownItemtext: {
            fontSize: font(20)
        },
        description: {
            borderWidth: 1,
            borderRadius: 10 * scale,
            fontSize: font(20)
        },
        btnRegister: {
            position: 'absolute',
            bottom: 100,
            width: '80%',
            alignItems: 'center',
            height: 50 * scale,
            justifyContent: 'center',
            borderRadius: 20 * scale,
            backgroundColor: colors.primary,
        },
        txtAgregar:{
            fontSize: font(22),
            color: colors.background,
            fontWeight: '600'
        }
    });


