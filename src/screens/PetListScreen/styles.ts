import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bcMain,
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pageMargin: {
    paddingHorizontal: 30,
    width: '100%',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoIcon: {
    width: 21,
    height: 21,
  },
  logoText: {
    color: colors.logo,
    fontSize: fonts.size.xlg,
    fontFamily: fonts.family.semiBold,
    textTransform: 'uppercase',
    marginTop: -10,
  },
  search: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: sizes.bordersRadius.input,
    marginTop: sizes.padding.listSearchTop,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.padding.inputHorizontal,
    display: 'none',
  },
  searchText: {
    width: '90%',
  },

  list: {
    marginTop: 20,
    borderRadius: sizes.bordersRadius.input,
    backgroundColor: '#00000070',
    flex: 1,
    marginBottom: 100,
  },

  BackgroundLogo1: {
    position: 'absolute',
    top: '5%',
    left: '80%',
    transform: [{rotate: '-30.00deg'}],
  },

  BackgroundLogo2: {
    position: 'absolute',
    top: '20%',
    right: '35%',
    transform: [{rotate: '-30.00deg'}],
  },

  BackgroundLogo3: {
    position: 'absolute',
    top: '32%',
    left: '2%',
    transform: [{rotate: '24.63deg'}],
  },

  BackgroundLogo4: {
    position: 'absolute',
    top: '45%',
    right: '25%',
    transform: [{rotate: '35.02deg'}],
  },

  BackgroundLogo5: {
    position: 'absolute',
    top: '60%',
    left: '-2%',
    transform: [{rotate: '-10.31deg'}],
  },

  BackgroundLogo6: {
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: [{rotate: '-10.31deg'}],
  },

  BackgroundLogo7: {
    position: 'absolute',
    top: '75%',
    right: '-2%',
    transform: [{rotate: '35.02deg'}],
  },
});

export default styles;
7;
