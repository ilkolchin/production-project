import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
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
