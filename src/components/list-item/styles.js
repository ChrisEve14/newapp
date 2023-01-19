import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        // borderBottomColor: colors.gray,
        // borderBottomWidth: 1,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 20,
        margin: 10,
    },
    infoContainer: {
        marginLeft: 15,
    },
    title: {
        fontSize: 25,
        fontFamily: "Indie",
        color: colors.black,
        // marginBottom: 10,
        // marginTop: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    trash: {
        alignItems: "center",
        justifyContent: "center",
        // marginRight: 20,
    },
});

