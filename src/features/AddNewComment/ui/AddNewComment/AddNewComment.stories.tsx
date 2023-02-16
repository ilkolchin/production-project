import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import AddNewComment from './AddNewComment';

export default {
  title: 'features/AddNewComment',
  component: AddNewComment,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => (
  <AddNewComment {...args} />
);

export const Light = Template.bind({});
Light.args = { onSendComment: action('onSendComment') };
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = { onSendComment: action('onSendComment') };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
