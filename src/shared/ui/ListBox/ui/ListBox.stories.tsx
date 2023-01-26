import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = {
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
TopLeft.decorators = [];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
BottomLeft.decorators = [];

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
TopRight.decorators = [];

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: 'value',
  items: [
    {
      content: 'First',
      value: '1th'
    },
    {
      content: 'Second',
      value: '2nd'
    },
    {
      content: 'Third',
      value: '3rd'
    }
  ]
};
BottomRight.decorators = [];
