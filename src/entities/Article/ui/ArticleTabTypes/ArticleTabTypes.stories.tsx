import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleTabTypes } from './ArticleTabTypes';

export default {
  title: 'entities/Article/ArticleTabTypes',
  component: ArticleTabTypes,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTabTypes>;

const Template: ComponentStory<typeof ArticleTabTypes> = (args) => (
  <ArticleTabTypes {...args} />
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
