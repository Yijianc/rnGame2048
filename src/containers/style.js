import { createStyles, BaseStyles } from '../components';

const {
  colors, gutterWidth,
} = BaseStyles;

const layoutStyles = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: gutterWidth,
    backgroundColor: colors.background,
  },
});

export default layoutStyles;
