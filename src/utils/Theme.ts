import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {applyMiddleware} from '@reduxjs/toolkit';

export const AppColors = {
  primary: '#28D063',
  secondary: '#FFFFFF',
  link: '#FD8369',
  background: '#F3F5F9',
} as const;

export const AppDarkColors = {
  primary: '#28D063',
  secondary: '#232323',
  link: '#FD8369',
  background: '#ffffff',
} as const;

export const MyDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    card: AppColors.secondary,
    background: AppColors.background,
    notification: AppColors.link,
  },
};

export const MyDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: AppDarkColors.primary,
    card: AppDarkColors.secondary,
    background: AppDarkColors.background,
    notification: AppDarkColors.link,
  },
};

// look into this later

// export const MyDarkTheme: Theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: AppColors.primary,
//     background: AppColors.background,
//     notification: AppColors.link,
//   },
// };
