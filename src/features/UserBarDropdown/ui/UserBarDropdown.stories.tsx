import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { UserBarDropdown } from './UserBarDropdown';
import Avatar from '@/shared/assets/tests/storybook.jpeg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/UserBarDropdown',
  component: UserBarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UserBarDropdown>;

const Template: ComponentStory<typeof UserBarDropdown> = (args) => (
  <UserBarDropdown {...args} />
);

export const Light = Template.bind({});
Light.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Orange = Template.bind({});
Orange.args = { user: { id: '1', username: 'Waze', avatar: Avatar } };
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];
