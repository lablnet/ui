import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ScrollArea } from "./ScrollArea";
import { Separator } from "@/components/Separator/Separator";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
};

export default meta;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: StoryObj = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border border-border bg-card">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-semibold leading-none text-foreground">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm text-foreground py-2">{tag}</div>
            <Separator className="my-1 bg-border/40" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};
