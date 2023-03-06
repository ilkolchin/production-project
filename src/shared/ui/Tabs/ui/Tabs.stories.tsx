import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
  tabs: [
    { value: 'tab 1', content: 'tab 1' },
    { value: 'tab 2', content: 'tab 2' },
    { value: 'tab 3', content: 'tab 3' },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  tabs: [
    { value: 'tab 1', content: 'tab 1' },
    { value: 'tab 2', content: 'tab 2' },
    { value: 'tab 3', content: 'tab 3' },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  tabs: [
    { value: 'tab 1', content: 'tab 1' },
    { value: 'tab 2', content: 'tab 2' },
    { value: 'tab 3', content: 'tab 3' },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
