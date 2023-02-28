import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.nunito[600],
    fontSize: 28,
    color: colors.font.white,
    marginTop: 91,
  },
});

export default Styles;
