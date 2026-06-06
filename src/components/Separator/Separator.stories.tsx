import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold leading-none text-foreground">Lablnet UI</h4>
        <p className="text-sm text-muted-foreground">
          A premium React UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm text-foreground">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Changelog</div>
      </div>
    </div>
  ),
};
