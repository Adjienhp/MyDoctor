import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.background.white,
  },
  title: {
    fontFamily: fonts.nunito[600],
    fontSize: 20,
    color: colors.font.dark,
    textAlign: 'center',
    flex: 1,
  },
});

export default Styles;
