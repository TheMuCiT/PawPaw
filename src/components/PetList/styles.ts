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
    overflow: 'hidden',
    backgroundColor: 'orange',
  },
  BCImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: sizes.bordersRadius.petItem,
  },
  BCImageCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: sizes.bordersRadius.petItem,
    backgroundColor: '#00000061',
  },
  content: {
    padding: sizes.padding.listItemPadding,

    height: '100%',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  edit: {
    marginLeft: 3,
    width: 38,
    height: 38,
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
    justifyContent: 'center',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
