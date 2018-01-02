import createStyles, {
  flexFulfill, colors, dimensions
} from '../style.base.js';

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
