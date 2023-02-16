import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
