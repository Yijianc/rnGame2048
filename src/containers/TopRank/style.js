import { createStyles, BaseStyles } from '../../components';

const {
  colors, fonts, buttonGap,
  flexCenter,
} = BaseStyles;

const text = {
  fontSize: fonts.lg,
  color: colors.fontColor,
};

export default createStyles({
  header: {
    ...flexCenter,
    marginTop: buttonGap,
  },
  text,
  score: {
    ...text,
    fontWeight: 'bold',
  },
});
