import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding.listItemPadding,
    paddingVertical: sizes.padding.listItemPadding,
  },
  left: {
    flexDirection: 'row',
  },
  right: {alignItems: 'center', justifyContent: 'center'},
  imageIMG: {
    width: 50,
    height: 44,
    borderRadius: sizes.bordersRadius.image,
  },
  name: {marginLeft: 15, justifyContent: 'center'},
  petName: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.default,
    color: colors.white,
  },
  petAge: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.xxs,
    color: colors.white,
  },
  edit: {},
});

export default styles;
