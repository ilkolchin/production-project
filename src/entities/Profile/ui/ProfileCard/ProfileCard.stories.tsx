import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
  data: {
    first: 'Ilya',
    lastname: 'Kolchin',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    currency: Currency.RUB
  },
  readonly: true
};

export const Editable = Template.bind({});
Editable.args = {
  data: {
    first: 'Ilya',
    lastname: 'Kolchin',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    currency: Currency.RUB
  },
  readonly: false
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    first: 'Ilya',
    lastname: 'Kolchin',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    currency: Currency.RUB
  },
  readonly: true
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
