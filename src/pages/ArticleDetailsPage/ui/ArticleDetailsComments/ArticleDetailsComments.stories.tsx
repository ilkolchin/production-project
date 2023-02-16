import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  <ArticleDetailsComments {...args} />
);

export const Light = Template.bind({});
Light.args = { id: '1' };
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = { id: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Orange = Template.bind({});
Orange.args = { id: '1' };
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];
