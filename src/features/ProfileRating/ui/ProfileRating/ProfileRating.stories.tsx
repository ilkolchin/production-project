import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: __API__ + '/profile-ratings?userId=1&profileId=1',
        method: 'GET',
        status: 200,
        response: []
      }
    ]
  }
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
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
      url: __API__ + '/profile-ratings?userId=1&profileId=1',
      method: 'GET',
      status: 200,
      response: [{ rate: 4 }]
    }
  ]
};
