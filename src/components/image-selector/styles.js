import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginBottom: 20,
    },
    preview: {
        width: "100%",
        height: 300,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.gray,
        borderWidth: 1,
      },
      title: {
        fontSize: 16,
        fontFamily: 'Mina-Bold',
      },
      image: {
        width: "100%",
        height: "100%",
 
      },
      buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
    
});