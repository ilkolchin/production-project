import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ErrorReload } from './ErrorReload';

export default {
  title: 'widgets/ErrorReload',
  component: ErrorReload,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ErrorReload>;

const Template: ComponentStory<typeof ErrorReload> = (args) => (
  <ErrorReload {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
