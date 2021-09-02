import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 24,
    height: 56,
    paddingHorizontal: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
});

export default styles;
