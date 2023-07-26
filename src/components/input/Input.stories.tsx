import React, { ChangeEvent, Component } from 'react';
import type { Meta, Story } from '@storybook/react';
import Input from './Input';
import { EyeLinesRegular, Person20Regular } from '@fluentui/react-icons';

interface InputProps {
  appearance?: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter';
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?:
    | 'number'
    | 'time'
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'date';
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
}

interface InputOnChangeData {
  value: string;
}

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      options: ['outline', 'underline', 'filled-darker', 'filled-lighter'],
      control: { type: 'select' },
    },
    contentBefore: {
      control: { type: 'object' },
    },
    contentAfter: {
      control: { type: 'object' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    type: {
      options: [
        'number',
        'time',
        'text',
        'search',
        'tel',
        'url',
        'email',
        'date',
      ],
      control: { type: 'select' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    // disabled: {
    //   control: { type: 'boolean' },
    // },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something',
  appearance: 'outline',
  size: 'medium',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  placeholder: 'Type something',
  appearance: 'outline',
  size: 'medium',
  contentBefore: (
    <i className='search-icon'>
      <Person20Regular />
    </i>
  ),
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  placeholder: 'Type something',
  appearance: 'outline',
  size: 'medium',
  contentAfter: (
    <i className='search-icon'>
      <EyeLinesRegular />
    </i>
  ),
};

// Add more stories here if needed
