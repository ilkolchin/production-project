import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Icon, IconSize, IconTheme } from './Icon';
import Svg from '@/shared/assets/icons/book.svg';

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { Svg: Svg }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const SizeL = Template.bind({});
SizeL.args = { size: IconSize.L };

export const Inverted = Template.bind({});
Inverted.args = { theme: IconTheme.INVERTED };
