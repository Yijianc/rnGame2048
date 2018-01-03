import { createStyles, BaseStyles } from '../../components';

const { flexFulfill, colors, dimensions } = BaseStyles;

const gameBoardStyles = createStyles({
  container: {
    ...flexFulfill,
  },
  board: {
    backgroundColor: colors.board,
    borderRadius: dimensions.fullScale,
    padding: dimensions.fullScale,
  },
});

export default gameBoardStyles;
