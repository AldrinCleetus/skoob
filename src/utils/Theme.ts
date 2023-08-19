import {DefaultTheme, Theme} from '@react-navigation/native';

export const AppColors = {
  primary: '#28D063',
  secondary: '#34334B',
  link: '#FD8369',
  background: '#F3F5F9',
} as const;

export const AppDarkColors = {
  primary: '#28D063',
  secondary: '#34334B',
  link: '#FD8369',
  background: '#F3F5F9',
} as const;

export const MyDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    background: AppColors.background,
    notification: AppColors.link,
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
