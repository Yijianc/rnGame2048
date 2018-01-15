import createStyles, {
  flexCenter, innerWidth, headerH,
  dimensions, colors, fonts,
  buttonGap,
} from '../style.base';

export default createStyles({
  menuWrapper: {
    ...flexCenter,
    paddingVertical: buttonGap / 2,
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
