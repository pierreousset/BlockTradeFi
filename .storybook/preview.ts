import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css, ThemeProvider } from '@emotion/react';
import { lightTheme } from './themes';

export const decorators = [
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
    themes: {
      light: lightTheme,
    },
    defaultTheme: 'light',
  }),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
