import { StyleSheet } from "react-native";
import colors from "./const/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    section: {
        width: '90%',
        padding: 20,
        gap: 5,
    },
})

export default styles;