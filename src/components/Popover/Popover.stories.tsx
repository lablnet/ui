import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { Button } from "@/components/Button/Button";
import { Label } from "@/components/Label/Label";
import { Input } from "@/components/Input/Input";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-foreground">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Configure layout configurations for the element.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
