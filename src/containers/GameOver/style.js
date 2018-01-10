import { createStyles, BaseStyles } from '../../components';

const {
  colors, fonts,
} = BaseStyles;

const baseStyle = {
  fontSize: fonts.lg,
  fontWeight: 'bold',
};

export default createStyles({
  text: {
    ...baseStyle,
    color: colors.white,
  },
  header: {
    ...baseStyle,
    color: colors.fontColor,
  }
});
