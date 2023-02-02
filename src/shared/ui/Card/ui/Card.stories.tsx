import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from '../../Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: <Text text="Hello World!" title="Big Hello from Title!" />
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  children: <Text text="Hello World!" title="Big Hello from Title!" />
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  children: <Text text="Hello World!" title="Big Hello from Title!" />
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
