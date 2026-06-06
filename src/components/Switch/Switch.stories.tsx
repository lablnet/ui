import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Switch } from "./Switch";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    );
  },
};
