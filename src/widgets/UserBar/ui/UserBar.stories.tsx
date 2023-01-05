import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { UserBar } from './UserBar';
import Avatar from 'shared/assets/tests/storybook.jpeg';

export default {
  title: 'widgets/UserBar',
  component: UserBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UserBar>;

const Template: ComponentStory<typeof UserBar> = (args) => (
  <UserBar {...args} />
);

export const Light = Template.bind({});
Light.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
