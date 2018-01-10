import createStyles, {
  flexCenter, fonts, colors,
  dimensions, padding, innerWidth,
  gutterWidth, headerH
} from '../style.base';

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
    fontSize: fonts.lg * 1.2,
    fontWeight: 'bold',
  },
});

export default brandStyles;
