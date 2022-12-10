import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title'
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
