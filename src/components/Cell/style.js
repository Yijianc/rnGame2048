import createStyles, {
  flexCenter, cellScale, colors,
  fonts,
} from '../style.base';

const MAX_CELL_VALUE = 8192 + 1;

const cell = {
  ...flexCenter,
  ...cellScale,
  backgroundColor: colors.baseCell,
};

const baseNumber = {
  color: colors.fontColor,
  fontSize: fonts.lg,
  fontWeight: 'bold'
};

const customCellStyles = () => {
  let customCell = {};
  let _val = 2;
  let seq = 1;
  while (_val < (MAX_CELL_VALUE)) {
    customCell = {
      ...customCell,
      [`cell${_val}`]: {
        ...cell,
        backgroundColor: colors[`cell${_val}`]
      }
    };
    seq += 1;
    _val = Math.pow(2, seq);
  }
  return customCell;
}

const customCell = customCellStyles();

const cellStyles = createStyles({
  cell,
  ...customCell,
  baseNumber,
  number: {
    ...baseNumber,
    color: colors.white,
  },
  largeNumber: {
    ...baseNumber,
    color: colors.white,
    fontSize: fonts.md,
  },
})

export default cellStyles;
