import { createStyles, BaseStyles } from '../../components';

const {
  flexCenter, innerWidth, headerH,
  dimensions, colors, fonts,
} = BaseStyles;

export default createStyles({
  btnWrapper: {
    ...flexCenter,
  },
  controller: {
    ...flexCenter,
    width: innerWidth * 0.6,
    height: headerH * 0.3,
    marginTop: dimensions.fullHeight * 0.05,
    borderRadius: dimensions.fullScale,
    backgroundColor: colors.board,
  },
  text: {
    color: colors.white,
    fontSize: fonts.md,
    fontWeight: 'bold',
  },
  header: {
    color: colors.fontColor,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  }
});
