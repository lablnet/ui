import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail, Key } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const WithEmailIcon: Story = {
  args: {
    placeholder: "you@example.com",
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithPasswordIcon: Story = {
  args: {
    type: "password",
    placeholder: "••••••••",
    leftIcon: <Key className="h-4 w-4" />,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: "Invalid input",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Locked input",
    disabled: true,
  },
};
