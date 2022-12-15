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
  },
  AddImage: {
    marginTop: 30,
    marginHorizontal: sizes.padding.main,
    height: '30%',
    borderRadius: sizes.bordersRadius.button,
  },
  addImageContainer: {
    backgroundColor: '#1e1e1ead',
    height: 160,
    borderRadius: sizes.bordersRadius.button,
  },

  addImageEmpty: {
    alignItems: 'center',
    height: 160,
    justifyContent: 'center',
  },
  image: {
    borderRadius: sizes.bordersRadius.button,
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
    color: colors.inputText,
    backgroundColor: colors.inputBC,
    borderRadius: sizes.bordersRadius.input,

    paddingHorizontal: sizes.padding.inputHorizontal,
    marginBottom: sizes.padding.inputBottom,

    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    opacity: 0.65,
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
});

export default styles;
