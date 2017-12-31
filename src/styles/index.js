import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
}

export const flexContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

// base styles
const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
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
  },
  flexRow: {
    ...flexContainer,
    flexDirection: 'row',
  },
  floxCol: {
    ...flexContainer,
    flexDirection: 'column'
  },
}

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...baseStyles, ...overrides})
}
