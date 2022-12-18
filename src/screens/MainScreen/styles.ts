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
  imageCover: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    backgroundColor: colors.imageCover,
  },
  logo: {
    top: '12%',
    alignItems: 'center',
  },
  name: {
    fontSize: fonts.size.logo,
    fontFamily: fonts.family.regular,
    textTransform: 'uppercase',
    color: colors.main,
    marginTop: -10,
    alignItems: 'center',
    textAlign: 'center',

    textShadowColor: '#00000091',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 7,

    letterSpacing: 2,
  },

  bDay: {
    top: '22%',
    alignItems: 'center',
  },
  bDayWrapper: {
    flexDirection: 'row',
  },
  bDayText: {
    color: colors.white,
    fontFamily: fonts.family.InterMedium,
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
    fontSize: fonts.size.xlg,
    fontFamily: fonts.family.InterSemiBold,
    color: colors.white,
  },
  timerText: {
    fontSize: fonts.size.md,
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
    opacity: 0.7,
  },
  navigationLeftDisable: {
    opacity: 0.2,
  },

  navigationRight: {
    alignItems: 'center',
    marginLeft: sizes.padding.mainInfoIcon,
    width: sizes.padding.mainInfoArrowSize,
    opacity: 0.7,
  },

  navigationRightDisable: {
    opacity: 0.2,
  },
  navigationText: {
    marginTop: sizes.padding.mainInfoText,
    fontSize: fonts.size.default,
    fontFamily: fonts.family.medium,
    color: colors.white,
  },
});

export default styles;
