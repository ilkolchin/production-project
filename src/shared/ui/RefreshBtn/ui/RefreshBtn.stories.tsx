import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RefreshBtn } from './RefreshBtn';

export default {
  title: 'shared/RefreshBtn',
  component: RefreshBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RefreshBtn>;

const Template: ComponentStory<typeof RefreshBtn> = (args) => (
  <RefreshBtn {...args} />
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
