import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
// import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(TranslationDecorator);
