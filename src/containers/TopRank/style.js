import { createStyles, BaseStyles } from '../../components';

const {
  colors, fonts, dimensions,
  flexCenter,
} = BaseStyles;

const text = {
  fontSize: fonts.lg,
  color: colors.fontColor,
};

export default createStyles({
  header: {
    ...flexCenter,
    marginTop: dimensions.fullHeight * 0.05,
  },
  text,
  score: {
    ...text,
    fontWeight: 'bold',
  },
});
