import createStyles, {
  flexCenter, cellScale, colors,
  fonts,
} from '../style.base';

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

function customCellStyles() {
  let customCell = {};
  let _val = 2;
  let seq = 1;
  while (_val < (8192 + 1)) {
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
})

export default cellStyles;
