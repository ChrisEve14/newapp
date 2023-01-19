import { StyleSheet } from "react-native";
import { colors }   from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        margin: 20,
    },
    title:{
        fontFamily: 'Mina',
        fontSize: 30,
        color: colors.black,
        marginBottom: 20,
    },
    inputName:{
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 5,
    },
    input: {
        borderColor: colors.gray,
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
  },
});


