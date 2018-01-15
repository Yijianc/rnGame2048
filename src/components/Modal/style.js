import createStyles, {
  colors, fonts, dimensions,
  headerH, innerWidth, flexFulfill,
  flexCenter, buttonGap
} from '../style.base';

const height = headerH * 0.3;
const borderRadius = dimensions.fullScale;

export default createStyles({
  nav: {
    ...flexCenter,
    flexDirection: 'row',
    height,
    marginTop: buttonGap,
    width: innerWidth,
  },
  header: {
    ...flexCenter,
    width: innerWidth - height,
    paddingLeft: height,
  },
  controller: {
    ...flexCenter,
    width: height,
    height,
    borderRadius: height,
    backgroundColor: colors.board,
  },
  text: {
    color: colors.white,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  headerText: {
    color: colors.fontColor,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
});
