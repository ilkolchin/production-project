import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: __API__ + '/article-ratings?userId=&articleId=',
        method: 'GET',
        status: 200,
        response: []
      }
    ]
  }
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
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

export const WithRate = Template.bind({});
WithRate.args = {};
WithRate.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=&articleId=',
      method: 'GET',
      status: 200,
      response: [{ rate: 4 }]
    }
  ]
};
