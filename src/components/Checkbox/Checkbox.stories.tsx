import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Checkbox } from "./Checkbox";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled checked />
      <Label htmlFor="disabled" className="opacity-50">
        Disabled option
      </Label>
    </div>
  ),
};
