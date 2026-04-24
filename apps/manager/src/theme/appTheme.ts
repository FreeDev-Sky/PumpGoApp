import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';

const brand = {
  primary: '#00796B',
  primaryContainer: '#B2DFDB',
  secondary: '#546E7A',
};

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: brand.primary,
    primaryContainer: brand.primaryContainer,
    secondary: brand.secondary,
  },
};

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#4DB6AC',
    primaryContainer: '#004D40',
    secondary: '#B0BEC5',
  },
};
