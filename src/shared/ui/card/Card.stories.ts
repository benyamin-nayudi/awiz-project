import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
  args: { 
    onClick: fn(),
    children: 'This is the card content. You can put any React component or text here.',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    theme: 'light',
    children: 'This is a light themed elevated card with shadow.',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
    children: 'This is a dark themed elevated card with shadow.',
  },
};

export const Interactive: Story = {
  args: {
    theme: 'light',
    children: 'This card is clickable and has hover effects. Click me!',
    onClick: fn(),
  },
};