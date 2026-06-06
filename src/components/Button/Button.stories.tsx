import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Mail, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Action",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete Item",
    variant: "destructive",
  },
};

export const Loading: Story = {
  args: {
    children: "Saving changes",
    variant: "primary",
    isLoading: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button leftIcon={<Mail className="h-4 w-4" />}>Email Login</Button>
      <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
        Get Started
      </Button>
    </div>
  ),
};
