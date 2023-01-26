import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import Avatar from 'shared/assets/tests/storybook.jpeg';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...(args as Record<string, unknown>)} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'Ilya',
        lastname: 'Kolchin',
        username: 'admin',
        age: 22,
        country: Country.Russia,
        city: 'Saint-Petersburg',
        currency: Currency.RUB,
        avatar: Avatar
      },
      readonly: true
    }
  })
];

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'Ilya',
        lastname: 'Kolchin',
        username: 'admin',
        age: 22,
        country: Country.Russia,
        city: 'Saint-Petersburg',
        currency: Currency.RUB,
        avatar: Avatar
      },
      readonly: false
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: 'Ilya',
        lastname: 'Kolchin',
        username: 'admin',
        age: 22,
        country: Country.Russia,
        city: 'Saint-Petersburg',
        currency: Currency.RUB,
        avatar: Avatar
      },
      readonly: true
    }
  })
];
