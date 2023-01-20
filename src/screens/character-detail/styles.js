import { StyleSheet } from "react-native";
import { colors }   from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 5,
    },
    title:{
        fontFamily: 'Indie',
        fontSize: 30,
        color: colors.black,
        marginBottom: 10,
    },
    description:{
        fontFamily: 'Indie',
        fontSize: 20,
        color: colors.black,
        marginBottom: 15,
    },
    image: {
        height: "40%",
        minHeight: 500,
        width: "100%",
        marginBottom: 15,
    },
    location: {
      margin: 20,
      width: "90%",
      maxWidth: 350,
      backgroundColor: colors.linenLight,
      shadowColor: colors.black,
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      marginBottom: 50,
    },
    addressContainer: {
      padding: 20,
    },
    address: {
      color: colors.black,
      textAlign: "center",
    },
 
});