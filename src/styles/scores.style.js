import createStyles, {
  colors, fonts, dimensions,
  gutterWidth, headerH, innerWidth,
  flexCenter,
} from './base.style.js';

const scoreStyles = createStyles({
  bandScore: {
    ...flexCenter,
    width: (innerWidth * 0.6 - gutterWidth) / 2,
    height: headerH,
    borderRadius: dimensions.fullScale,
    backgroundColor: colors.scoreBoard,
  },
  score: {},
  text: {
    color: colors.scoreColor,
    fontSize: fonts.md,
  },
});

export default scoreStyles;
