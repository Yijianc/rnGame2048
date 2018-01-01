import createStyles, {
  flexCenter, fonts, colors,
  dimensions, padding, innerWidth,
  gutterWidth, headerH
} from './base.style.js';

const brandStyles = createStyles({
  title: {
    ...flexCenter,
    width: innerWidth * 0.4 - gutterWidth,
    height: headerH,
    marginRight: gutterWidth,
    borderRadius: dimensions.fullScale,
    backgroundColor: colors.favicon,
  },
  text: {
    color: colors.white,
    fontSize: fonts.md,
    fontWeight: 'bold',
  },
});

export default brandStyles;
