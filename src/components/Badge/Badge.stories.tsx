import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "destructive", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Primary Badge",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Emerald Badge",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="success">Online</Badge>
      <Badge variant="warning">Away</Badge>
      <Badge variant="destructive">Offline</Badge>
    </div>
  ),
};
