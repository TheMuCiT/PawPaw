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
    top: '-2%',
    left: '20%',
    transform: [{rotate: '-23.03deg'}],
  },

  BackgroundLogo2: {
    position: 'absolute',
    top: '5%',
    right: '10%',
    transform: [{rotate: '-23.03deg'}],
  },

  BackgroundLogo3: {
    position: 'absolute',
    top: '12%',
    left: '3%',
    transform: [{rotate: '-23.03deg'}],
  },

  BackgroundLogo4: {
    position: 'absolute',
    top: '12.5%',
    right: '35%',
    transform: [{rotate: '-23.03deg'}],
  },

  BackgroundLogo5: {
    position: 'absolute',
    top: '30%',
    right: '1%',
    transform: [{rotate: '60deg'}],
  },

  BackgroundLogo6: {
    position: 'absolute',
    top: '35%',
    left: '2%',
    transform: [{rotate: '-60deg'}],
  },

  BackgroundLogo7: {
    position: 'absolute',
    top: '49%',
    left: '28%',
    transform: [{rotate: '-23.03deg'}],
  },

  BackgroundLogo8: {
    position: 'absolute',
    bottom: '30%',
    right: '1%',
    transform: [{rotate: '45deg'}],
  },

  BackgroundLogo9: {
    position: 'absolute',
    bottom: '18%',
    left: '1%',
    transform: [{rotate: '-90deg'}],
  },

  BackgroundLogo10: {
    position: 'absolute',
    bottom: '10%',
    right: '-2%',
    transform: [{rotate: '-75deg'}],
  },
});

export default styles;
7;
