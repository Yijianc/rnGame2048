import createStyles, { flexFulfill, colors, dimensions } from './base.style.js';

const boardStyles = createStyles({
  board: {
    backgroundColor: colors.board,
    borderRadius: dimensions.fullScale,
    padding: dimensions.fullScale,
  },
  container: {
    ...flexFulfill,
  }
})

export default boardStyles;
