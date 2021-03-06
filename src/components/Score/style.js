import createStyles, {
  colors, fonts, dimensions,
  gutterWidth, headerH, innerWidth,
  flexCenter, padding,
} from '../style.base';

const score = {
  color: colors.white,
  fontSize: fonts.lg,
  fontWeight: 'bold',
};

const scoreStyles = createStyles({
  bandScore: {
    ...flexCenter,
    justifyContent: 'space-around',
    width: (innerWidth * 0.6 - gutterWidth) / 2,
    height: headerH * 0.7 - gutterWidth,
    paddingVertical: padding.sm,
    borderRadius: dimensions.fullScale,
    backgroundColor: colors.scoreBoard,
  },
  score,
  largeScore: {
    ...score,
    fontSize: fonts.md,
  },
  text: {
    color: colors.scoreColor,
    fontSize: fonts.md,
    fontWeight: 'bold',
  },
});

export default scoreStyles;
