import createStyles, {
  flexCenter, flexRow, colors,
  padding, dimensions, innerWidth,
  gutterWidth, headerH
} from './base.style.js';

const layoutStyles = createStyles({
  app: {
    flex: 1,
    paddingHorizontal: gutterWidth,
    backgroundColor: colors.background,
  },
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
    height: headerH,
    justifyContent: 'space-between',
  },
  controller: {
    height: 50,
    backgroundColor: colors.secondary
  },
});

export default layoutStyles;
