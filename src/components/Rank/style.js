import createStyles, {
  colors, fonts, dimensions,
  headerH, innerWidth, buttonGap,
  flexCenter, flexFulfill,
} from '../style.base';

const height = headerH * 0.3;
const borderRadius = dimensions.fullScale;
const marginTop = buttonGap;

const seq = {
  ...flexCenter,
  flex: 0.3,
  height,
  borderRadius,
  backgroundColor: colors.tertiary
};

export default createStyles({
  rankBoard: {
    ...flexFulfill,
    justifyContent: 'flex-start',
  },
  list: {
    ...flexCenter,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: innerWidth * 0.6,
    height,
    marginTop,
    borderRadius,
    backgroundColor: colors.board,
  },
  seq,
  firstSeq: {
    ...seq,
    backgroundColor: colors.btn
  },
  score: {
    flex: 0.7,
    paddingLeft: innerWidth * 0.6 * 0.7 * 0.1,
  },
  text: {
    color: colors.white,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  header: {
    color: colors.fontColor,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  }
});
