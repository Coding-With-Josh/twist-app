import type { Theme } from '@react-navigation/native/src/types';

export const DefaultTheme: Theme = {
  dark: false,
  light: false,
  glass: false,
  colors: {
    primary: 'blue',
    background: 'white',
    card: 'gray',
    text: 'black',
    border: 'black',
    notification: '#ff3b30',
    warning: '#ff3b30',
    success: '#0cbc2f'
  },
};

export const DarkTheme: Theme = {
  dark: true,
  light: false,
  glass: false,
  colors: {
    primary: '#5f20e7',
    background: '#040006f9',
    card: '#3b3b3c66',
    text: '#f1eff7',
    border: '#edeaea10;',
    notification: '#ff3b30',
    warning: '#ff3b30',
    success: '#0cbc2f'
  },
};

export const LightTheme: Theme = {
  dark: false,
  light: true,
  glass: false,
  colors: {
    primary: '#5f20e7',
    background: '#e8ecf4',
    card: '#adadae5a',
    text: '#110230',
    border: '#00000021',
    notification: '#ff3b30',
    warning: '#ff3b30',
    success: '#0cbc2f'
  },
};

export const GlassTheme: Theme = {
  dark: false,
  light: false,
  glass: true,
  colors: {
    primary: '#5f20e7',
    background: '#0c001f',
    card: '#9d9d9e41',
    text: '#cac9cb',
    border: '#00000084',
    notification: '#ff3b30',
    warning: '#ff3b30',
    success: '#0cbc2f',
  },
};
