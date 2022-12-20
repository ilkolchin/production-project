import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import img from './image.jpeg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 200,
  src: img
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: img
};
