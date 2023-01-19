import { StyleSheet } from "react-native";
import { colors }   from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      },
    emptyText: {
        fontFamily: 'Mina',
        fontSize: 20,
        color: colors.black,
    },
});