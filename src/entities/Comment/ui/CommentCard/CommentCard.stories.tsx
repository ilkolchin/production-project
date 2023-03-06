import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { CommentCard } from './CommentCard';
import Avatar from '@/shared/config/storybook/img/image.jpeg';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comment: {
    id: '1',
    user: { id: '1', username: 'Waze', avatar: Avatar },
    text: 'Comment',
  },
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    id: '1',
    user: { id: '1', username: 'Waze', avatar: Avatar },
    text: 'Comment',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
  comment: {
    id: '1',
    user: { id: '1', username: 'Waze', avatar: Avatar },
    text: 'Comment',
  },
  isLoading: true,
};
IsLoading.decorators = [];
