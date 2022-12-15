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
  pageMargin: {
    width: '100%',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  logoIcon: {
    width: 21,
    height: 21,
  },
  list: {
    marginTop: 30,
    flex: 1,
    paddingBottom: 20,
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
