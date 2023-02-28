import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    backgroundColor: colors.background.white,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border.lightGray,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 26,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.nunito[600],
    fontSize: 24,
    color: colors.font.dark,
    marginBottom: 4,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.nunito[400],
    fontSize: 18,
    color: colors.font.dark,
    textAlign: 'center',
  },
});

export default Styles;
