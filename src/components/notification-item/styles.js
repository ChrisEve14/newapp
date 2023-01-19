import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: colors.light,
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
    },
    headerContainer:{
        padding: 5,
        margin: 5,
    },
    date:{},
    contentContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
    },
    added:{
        fontSize: 14,
        fontFamily: 'Mina-Bold'
    },
});