import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bcMain,
  },
  AddImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.imageAddBackground,
  },

  Logo: {
    alignItems: 'center',
    marginTop: sizes.padding.listSearchTop,
  },

  MainBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 80,
  },

  BoxBcImage: {
    position: 'absolute',
    bottom: 55,
  },

  petName: {
    fontSize: fonts.size.xxxlg,
    fontFamily: fonts.family.semiBold,
    color: '#000000',
    textTransform: 'uppercase',
    alignItems: 'center',
  },

  BoxField: {
    width: 150,
    borderRadius: sizes.bordersRadius.image,
    backgroundColor: '#1E1E1E',
    marginBottom: 16,
    alignItems: 'center',
    paddingVertical: 8,

    shadowColor: '#b91010ff',
    shadowRadius: 9,
    elevation: 9,
  },

  BoxText: {
    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    color: colors.white,
    opacity: 0.73,
    letterSpacing: 1,
    textAlign: 'center',
  },

  swipe: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    colors: colors.inputBC,

    textTransform: 'uppercase',

    textShadowColor: 'rgba(185, 16, 16, 0.82)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },

  swipeText: {
    fontSize: 16,
    fontFamily: fonts.family.Bold,
    color: colors.inputBC,
    fontVariant: ['small-caps'],

    textShadowColor: 'rgba(185, 16, 16, 0.82)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 4,
    marginTop: -8,
    marginLeft: 3,
  },

  NameContainer: {
    width: '100%',
  },
  NameWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginHorizontal: sizes.padding.mainHorizontal,
    height: 100,
    marginTop: -50,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NameText: {
    fontSize: fonts.size.xxlg,
    fontFamily: fonts.family.semiBold,
    color: colors.white,
    textTransform: 'uppercase',
  },

  DataContainer: {
    width: '100%',
  },

  DataTitle: {
    marginHorizontal: sizes.padding.mainHorizontal,
    marginTop: 15,
  },

  TitleText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.white,
  },

  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
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

  BackgroundLogo1: {
    position: 'absolute',
    top: '80%',
    left: '13%',
    transform: [{rotate: '24.63deg'}],
  },

  BackgroundLogo2: {
    position: 'absolute',
    top: '75%',
    right: '5%',
    transform: [{rotate: '-10.31deg'}],
  },

  BackgroundLogo3: {
    position: 'absolute',
    top: '55%',
    left: '23%',
    transform: [{rotate: '24.63deg'}],
  },

  BackgroundLogo4: {
    position: 'absolute',
    top: '45%',
    right: '15%',
    transform: [{rotate: '-37.51deg'}],
  },

  BackgroundLogo5: {
    position: 'absolute',
    top: '30%',
    left: '18%',
    transform: [{rotate: '-23.64deg'}],
  },
});

export default styles;
