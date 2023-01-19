import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.background,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: colors.white,
        minHeight: 350,
    },
    title:{
        fontSize: 25,
        fontFamily: 'Satisfy',
        marginVertical: 5,
        textAlign: 'center',
    },
    label:{
        fontSize: 15,
        fontFamily: 'Mina',
        marginVertical: 5,
    },
    prompt:{
        width: '100%',
        alignItems: 'center',
        marginVertical: 5,
    },
    promptButton:{
        width: '100%',
        backgroundColor: colors.white,
        borderColor: colors.background,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptText:{
        fontFamily: 'Mina',
        fontSize: 12,
        color: colors.black,
    },
});