import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeToggle } from './theme-toggle';
import { Providers } from '../../providers';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Shared/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <Providers>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Story />
        </div>
      </Providers>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable theme toggle component that switches between light and dark modes. Integrates with the theme context provider.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle component',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'rounded'],
      description: 'Visual style variant of the toggle',
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show "Light" and "Dark" labels',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    showLabels: false,
    disabled: false,
  },
};