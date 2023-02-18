import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
// import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: { disable: true },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#00aced' },
      { name: 'dark', class: Theme.DARK, color: '#3b5998' },
      { name: 'orange', class: Theme.ORANGE, color: '#3b5998' }
    ]
  }
};

addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator());
// addDecorator(TranslationDecorator);
