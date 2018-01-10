import createStyles, {
  colors, fonts,
} from '../style.base';

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
