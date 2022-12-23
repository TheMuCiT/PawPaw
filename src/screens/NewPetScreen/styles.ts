import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bcMain,
  },
  BCImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -5,
  },
  AddImage: {
    marginTop: 30,
    marginHorizontal: sizes.padding.main,
    borderRadius: sizes.bordersRadius.button,
    alignItems: 'center',
  },

  InputsContainer: {
    flex: 1,
    width: '100%',
    bottom: 0,
    justifyContent: 'flex-end',
    marginBottom: sizes.height.navBarHeight,
    paddingBottom: 10,
    maxWidth: 400,
    alignSelf: 'center',
  },
  Inputs: {
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: sizes.padding.mainHorizontal,
  },

  InputElement: {
    width: '100%',
    height: sizes.height.input,
    color: colors.inputText,
    backgroundColor: colors.inputBC,
    borderRadius: sizes.bordersRadius.input,

    paddingHorizontal: sizes.padding.inputHorizontal,
    marginBottom: sizes.padding.inputBottom,

    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    opacity: 0.65,
  },

  InputElementDrop: {
    width: '100%',
    height: sizes.height.input,

    backgroundColor: colors.inputBC,
    borderRadius: sizes.bordersRadius.input,

    paddingHorizontal: sizes.padding.inputHorizontal,
    marginBottom: sizes.padding.inputBottom,

    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    opacity: 0.65,

    borderWidth: 0,
  },

  InputElementDropText: {
    color: colors.inputText,
    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
  },

  InputElementDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: sizes.height.input,

    backgroundColor: colors.inputBC,

    borderRadius: sizes.bordersRadius.input,

    paddingHorizontal: sizes.padding.inputHorizontal,
    marginBottom: sizes.padding.inputBottom,

    opacity: 0.65,
  },

  InputElementText: {
    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    color: colors.inputText,
  },

  Button: {
    backgroundColor: '#2B2B2C',
    alignItems: 'center',
    borderRadius: sizes.bordersRadius.button,
  },

  ButtonText: {
    color: colors.mainSecond,
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.Bold,
    textTransform: 'uppercase',
    padding: sizes.padding.buttonPadding,
  },

  BackButton: {
    position: 'absolute',
    top: '2%',
    left: '3%',
  },

  bcLogoSmall1: {
    position: 'absolute',
    top: '25%',
    right: '27.5%',
    transform: [{rotate: '46.3deg'}],
  },

  bcLogoSmall2: {
    position: 'absolute',
    top: '40%',
    left: '26%',
    transform: [{rotate: '-121.76deg'}],
  },

  bcLogoSmall11: {
    position: 'absolute',
    top: '25%',
    right: '33%',
    transform: [{rotate: '46.3deg'}],
  },

  bcLogoSmall22: {
    position: 'absolute',
    top: '40%',
    left: '33%',
    transform: [{rotate: '-121.76deg'}],
  },
});

export default styles;
