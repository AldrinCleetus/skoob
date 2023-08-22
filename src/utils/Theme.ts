import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {applyMiddleware} from '@reduxjs/toolkit';

export const AppColors = {
  primary: '#1E8543',
  secondary: '#FFFFFF',
  link: '#FD8369',
  background: '#F3F5F9',
} as const;

export const AppDarkColors = {
  primary: '#1E8543',
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
