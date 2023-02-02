/* eslint-disable fsd-stable/fsd-paths-checker */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Light = Template.bind({});
Light.args = {
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
