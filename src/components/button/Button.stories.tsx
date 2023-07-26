import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from './Button';

interface ButtonProps {
  icon?: React.ReactNode;
  as?: 'a' | 'button';
  disabledFocusable?: boolean;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'subtle' | 'outline' | 'secondary' | 'primary' | 'transparent';
  iconPosition?: 'left' | 'right';
  shape?: 'circular' | 'square' | 'rounded';
  children: React.ReactNode;
}

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'transparent'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['circular', 'square', 'rounded'],
      control: { type: 'radio' },
    },
    // disabled: {
    //   control: { type: 'boolean' },
    // },
    disabledFocusable: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'object' },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'medium',
};

export const Size = Template.bind({});
Size.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'medium',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'medium',
  icon: <span>🚀</span>,
  iconPosition: 'left',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'medium',
  disabledFocusable: true,
};

export const CircularShape = Template.bind({});
CircularShape.args = {
  children: 'Button',
  appearance: 'primary',
  size: 'medium',
  shape: 'circular',
};

// Add more stories here if needed
