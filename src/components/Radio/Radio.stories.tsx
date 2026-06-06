import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { RadioGroup, RadioGroupItem } from "./Radio";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact Option</Label>
      </div>
    </RadioGroup>
  ),
};
