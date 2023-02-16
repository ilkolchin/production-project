import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

const data: Notification = {
  id: '1',
  title: 'Title',
  description: 'Description',
  userId: '1'
};

export const Light = Template.bind({});
Light.args = { item: data };
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = { item: data };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { item: data };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
