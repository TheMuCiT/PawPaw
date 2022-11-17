import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.bcMain,
  },
  BCImage: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logo: {
    top: '15%',
    alignItems: 'center',
  },
  name: {
    fontSize: fonts.size.logo,
    fontFamily: fonts.family.regular,
    textTransform: 'uppercase',
    color: colors.main,
    marginTop: -15,
  },

  bDay: {
    top: '25%',
    alignItems: 'center',
  },
  bDayText: {
    color: colors.white,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.xxlg,
  },
  bDayTextTH: {
    color: colors.white,
    fontFamily: fonts.family.light,
    fontSize: 20,
  },
  timer: {
    top: '55%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  timerBox: {
    width: sizes.padding.timer,
    alignItems: 'center',
    borderRightWidth: sizes.borderWidth.timer,
    borderRightColor: colors.mainSecond,
  },

  timerTime: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.semiBold,
    color: colors.white,
  },
  timerText: {
    fontSize: fonts.size.default,
    fontFamily: fonts.family.medium,
    color: colors.white,
  },

  navigation: {
    top: '70%',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  navigationLeft: {
    alignItems: 'center',
    marginRight: sizes.padding.mainInfoIcon,
    width: sizes.padding.mainInfoArrowSize,
    opacity: 0.3,
  },

  navigationRight: {
    alignItems: 'center',
    marginLeft: sizes.padding.mainInfoIcon,
    width: sizes.padding.mainInfoArrowSize,
    opacity: 0.3,
  },
  navigationText: {
    marginTop: sizes.padding.mainInfoText,
    fontSize: fonts.size.default,
    fontFamily: fonts.family.medium,
    color: colors.white,
  },
});

export default styles;
