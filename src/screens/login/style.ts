import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: fonts.nunito[600],
    fontSize: 20,
    color: colors.font.dark,
    marginVertical: 40,
    maxWidth: 153,
  },
});

export default Styles;
