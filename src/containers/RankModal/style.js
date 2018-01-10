import { createStyles, BaseStyles } from '../../components';

const {
  flexCenter, innerWidth, headerH,
  dimensions, colors,fonts,
  flexFulfill, flexRow,
} = BaseStyles;

const height = headerH * 0.3;
const borderRadius = dimensions.fullScale;
const marginTop = dimensions.fullHeight * 0.05;

const seq = {
  ...flexCenter,
  flex: 0.3,
  height,
  borderRadius,
  backgroundColor: colors.tertiary
};

export default createStyles({
  nav: {
    ...flexCenter,
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height,
    marginTop,
    width: innerWidth,
  },
  controller: {
    ...flexCenter,
    width: height,
    height,
    borderRadius: height,
    backgroundColor: colors.board,
  },
  rankBoard: {
    ...flexFulfill,
    justifyContent: 'flex-start',
    paddingTop: marginTop,
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
