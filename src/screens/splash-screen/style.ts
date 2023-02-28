import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background.white,
  },
  title: {
    fontFamily: fonts.nunito[600],
    fontSize: 20,
    color: colors.font.dark,
    marginTop: 20,
  },
});

export default Styles;
