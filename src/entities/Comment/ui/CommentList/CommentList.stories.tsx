import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { CommentList } from './CommentList';
import Avatar from '@/shared/config/storybook/img/image.jpeg';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'Waze', avatar: Avatar },
      text: 'comment',
    },
    {
      id: '2',
      user: { id: '2', username: 'Vasya', avatar: Avatar },
      text: 'comment 2',
    },
  ],
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'Waze', avatar: Avatar },
      text: 'comment',
    },
    {
      id: '2',
      user: { id: '2', username: 'Vasya', avatar: Avatar },
      text: 'comment 2',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
  comments: [],
  isLoading: true,
};
IsLoading.decorators = [];
