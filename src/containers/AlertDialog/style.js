import { createStyles, BaseStyles } from '../../components';

const {
  flexCenter, innerWidth, headerH,
  dimensions, colors, fonts,
  buttonGap,
} = BaseStyles;

export default createStyles({
  dialogWrapper: {
    ...flexCenter,
  },
  btnWrapper: {
    marginVertical: buttonGap / 2,
  },
  controller: {
    ...flexCenter,
    width: innerWidth * 0.6,
    height: headerH * 0.3,
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
