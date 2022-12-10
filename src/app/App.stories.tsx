import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { App } from './App';

export default {
  title: 'app/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => (
  <App {...(args as Record<string, unknown>)} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
