import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  item: {
    borderRadius: sizes.bordersRadius.petItem,
    marginBottom: 20,
    shadowColor: '#0000006b',
    shadowOffset: {width: 0, height: -3},
    shadowRadius: 9,
    elevation: 9,
    marginHorizontal: sizes.padding.main,
  },
  BCImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: sizes.bordersRadius.petItem,
  },
  content: {
    padding: sizes.padding.listItemPadding,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  edit: {
    marginLeft: 8,
    width: 25,
    height: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#0000006b',
    shadowOffset: {width: -1, height: -1},
    shadowRadius: 5,
  },
  nameContainer: {
    marginTop: sizes.padding.listItemNameTop,
    marginBottom: sizes.padding.listItemNameBottom,
    alignItems: 'center',
  },
  petName: {
    fontSize: fonts.size.xxxlg,
    fontFamily: fonts.family.semiBold,
    textTransform: 'uppercase',
    color: '#000000',
  },
  petAge: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    color: colors.white,
  },
});

export default styles;
