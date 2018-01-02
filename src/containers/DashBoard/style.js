import { createStyles, BaseStyles } from '../../components';

const {
  flexCenter, flexRow, colors,
  dimensions, innerWidth, gutterWidth,
  headerH,
} = BaseStyles;

const dashboardStyles = createStyles({
  header: {
    ...flexCenter,
    flexDirection: 'row',
    width: innerWidth,
    height: headerH,
    marginTop: dimensions.fullHeight * .05,
    overflow: 'hidden',
  },
  scorePanel: {
    ...flexRow,
    width: innerWidth * 0.6,
    height: headerH * 0.7 - gutterWidth,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  controller: {
    width: innerWidth * 0.6,
    height: headerH * 0.3,
    borderRadius: dimensions.fullScale,
    backgroundColor: colors.btn,
  },
});

export default dashboardStyles;
