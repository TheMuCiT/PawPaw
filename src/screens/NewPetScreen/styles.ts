import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bcMain,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  AddImage: {
    height: '30%',
    minHeight: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.imageAddBackground,
  },
  AddImageText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    color: colors.main,
    marginBottom: 10,
  },
  InputsContainer: {
    width: '100%',
  },
  Inputs: {
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: sizes.padding.mainHorizontal,
  },

  InputElement: {
    width: '100%',
    height: sizes.height.input,
    color: colors.main,
    backgroundColor: colors.inputBC,
    borderRadius: sizes.bordersRadius.input,
    borderColor: colors.border,
    borderWidth: sizes.borderWidth.input,
    paddingHorizontal: sizes.padding.inputHorizontal,
    placeholderTextColor: 'red',
    marginBottom: sizes.padding.inputBottom,

    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },

  NodeInput: {
    borderRadius: sizes.bordersRadius.input,
    borderColor: colors.border,
    borderWidth: sizes.borderWidth.input,
    backgroundColor: colors.inputBC,
    paddingHorizontal: sizes.padding.inputHorizontal,
    placeholderTextColor: 'red',
    marginBottom: sizes.padding.inputBottom,
  },

  InputElementNote: {
    color: colors.main,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    maxHeight: 200,
    textAlignVertical: 'top',
  },

  InputElementDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: sizes.height.input,

    backgroundColor: colors.inputBC,

    borderRadius: sizes.bordersRadius.input,
    borderColor: colors.border,
    borderWidth: sizes.borderWidth.input,
    paddingHorizontal: sizes.padding.inputHorizontal,
    marginBottom: sizes.padding.inputBottom,
  },

  InputElementText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.main,
  },

  Button: {
    backgroundColor: colors.button,
    alignItems: 'center',
    borderRadius: sizes.bordersRadius.button,
  },

  ButtonText: {
    color: colors.main,
    fontSize: fonts.size.default,
    fontFamily: fonts.family.medium,
    textTransform: 'uppercase',
    padding: sizes.padding.buttonPadding,
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

  BackButton: {
    position: 'absolute',
    top: '3%',
    left: '5%',
  },
});

export default styles;
