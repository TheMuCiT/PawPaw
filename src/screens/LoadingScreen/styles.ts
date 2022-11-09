import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.bcMain,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '40%',
    left: '0%',
    width: '100%',
    alignItems: 'center',
  },
  logoText: {
    color: colors.logo,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.logo,
    textTransform: 'uppercase',
    marginTop: -15,
  },
  logoSubText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    marginTop: -15,
    marginLeft: '38%',
  },
});

export default styles;
