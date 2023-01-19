import { StyleSheet } from 'react-native';

import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Mina',
    marginVertical: 5,
    color: colors.black,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'Mina',
    marginVertical: 5,
    color: colors.gray,
  },
});
