import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate delectus et deleniti omnis, dolor accusamus inventore officiis. Doloremque reiciendis quis, asperiores excepturi, nesciunt exercitationem illo accusamus earum inventore vero numquam!'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate delectus et deleniti omnis, dolor accusamus inventore officiis. Doloremque reiciendis quis, asperiores excepturi, nesciunt exercitationem illo accusamus earum inventore vero numquam!'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
