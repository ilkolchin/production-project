import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: __API__ + '/notifications',
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Title 1',
            description: 'Description'
          },
          {
            id: '2',
            title: 'Title 2',
            description: 'Description'
          },
          {
            id: '3',
            title: 'Title 3',
            description: 'Description'
          }
        ]
      }
    ]
  }
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
