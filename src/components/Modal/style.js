import createStyles, {
  colors, fonts, dimensions,
  headerH, innerWidth, flexFulfill,
  flexCenter,
} from '../style.base';

const height = headerH * 0.3;
const borderRadius = dimensions.fullScale;
const marginTop = dimensions.fullHeight * 0.05;

export default createStyles({
  nav: {
    ...flexCenter,
    flexDirection: 'row',
    height,
    marginTop,
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
