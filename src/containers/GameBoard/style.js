import { createStyles, BaseStyles } from '../../components';

const { flexFulfill } = BaseStyles;

const gameBoardStyles = createStyles({
  container: {
    ...flexFulfill,
  }
});

export default gameBoardStyles;
