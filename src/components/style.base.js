import { StyleSheet, Dimensions, Platform } from 'react-native';

const { scale, width, height, fontScale } = Dimensions.get('window');

console.log(Platform, 'Platform');

export const dimensions = {
  fullHeight: height,
  fullWidth: width,
  fullScale: scale,
  fontScale,
};

export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',

  background: '#faf8ef',
  favicon: '#ecc300',
  scoreBoard: '#bcada0',
  btn: '#ec995b',
  board: '#baad9f',
  baseCell: '#ccc0b4',
  fontColor: '#766e65',
  scoreColor: '#eee4d5',

  cell2: '#eee4da',
  cell4: '#ede0c8',
  cell8: '#f2b179',
  cell16: '#ec8c54',
  cell32: '#f67c5f',
  cell64: '#ea5937',
  cell128: '#f3d86b',
  cell256: '#f1d04b',
  cell512: '#e4bf2a',
  cell1024: '#e2ba12', // 临时
  cell2048: '#ecc300',
  cell4096: '#ecc300', // 临时
  cell8192: '#ecc300', // 临时

  black: '#000',
  white: '#fff',
  grey: '#eee',

  red: '#ff5252',
  pink: '#e91e63',
  purple: '#9c27b0',
  deepPurple: '#673ab7',
  indigo: '#3f51b5',
  blue: '#2196f3',
  lightBlue: '#03a9f4',
  cyan: '#00bcd4',
  teal: '#009688',
  green: '#4caf50',
  lightGreen: '#8bc34a',
  lime: '#cddc39',
  yellow: '#ffeb3b',
  amber: '#ffc107',
  orange: '#ff9800',
  deepOrange: '#ff5722',
  brown: '#795548',

  gray: '#f7f7f7',
  lightBlack: '#666',
  peach: '#ff4081',
};


export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 12 * fontScale,
  md: 18 * fontScale,
  lg: 28 * fontScale,
  primary: 'Cochin'
};

export const flexCenter = {
  justifyContent: 'center',
  alignItems: 'center'
};

export const flexFulfill = {
  flex: 1,
  ...flexCenter
};


const MARGIN_WIDTH = 2 * scale;
const rowWidth = (width - 10 * scale - MARGIN_WIDTH * 10);
const CELL_SCALE = rowWidth / 4;

export const cellScale = {
  width: CELL_SCALE,
  height: CELL_SCALE,
  margin: MARGIN_WIDTH,
  borderRadius: scale
};


export const innerWidth = rowWidth + MARGIN_WIDTH * 2 * 4 + scale * 2;  // row width + 4 cells' margin + outer wrapper padding;

export const gutterWidth = (dimensions.fullWidth - innerWidth) / 2;

export const flexRow = {
  ...flexFulfill,
  flexDirection: 'row',
};

export const flexCol = {
  ...flexFulfill,
  flexDirection: 'column'
};

export const headerH = dimensions.fullHeight * 0.2;

// base styles
const baseStyles = {
  container: {
    flex: 1,
    paddingHorizontal: gutterWidth,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    fontWeight: 'bold'
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  }
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...baseStyles, ...overrides})
}
