import createStyles, {
  colors, fonts, dimensions,
  gutterWidth, headerH, innerWidth,
  flexCenter, padding,
} from '../style.base.js';

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
  score: {
    color: colors.white,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  text: {
    color: colors.scoreColor,
    fontSize: fonts.md,
    fontWeight: 'bold',
  },
});

export default scoreStyles;
