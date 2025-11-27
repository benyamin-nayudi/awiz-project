import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'date', 'number'],
    },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text here...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    theme: 'light',
    label: 'Light Input',
    placeholder: 'Enter your text...',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
    label: 'Dark Input',
    placeholder: 'Enter your text...',
  },
};

export const WithIcon: Story = {
  args: {
    theme: 'light',
    label: 'Email Address',
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    theme: 'light',
    label: 'Username',
    placeholder: 'Enter username...',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    theme: 'light',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};