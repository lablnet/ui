import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select Dropdown",
  component: Select,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-[180px]">
      <Select defaultValue="light">
        <SelectTrigger>
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Appearance</SelectLabel>
            <SelectItem value="light">Light Theme</SelectItem>
            <SelectItem value="dark">Obsidian Dark</SelectItem>
            <SelectSeparator />
            <SelectItem value="system">System Default</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
