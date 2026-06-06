import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  Sidepanel,
  SidepanelTrigger,
  SidepanelContent,
  SidepanelHeader,
  SidepanelTitle,
  SidepanelDescription,
  SidepanelClose,
} from "./Sidepanel";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Sidepanel> = {
  title: "Components/Sidepanel (Sheet)",
  component: Sidepanel,
};

export default meta;
type Story = StoryObj<typeof Sidepanel>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-4">
      <Sidepanel>
        <SidepanelTrigger asChild>
          <Button variant="primary">Right Drawer</Button>
        </SidepanelTrigger>
        <SidepanelContent side="right">
          <SidepanelHeader>
            <SidepanelTitle>Right Side Panel</SidepanelTitle>
            <SidepanelDescription>
              This panel slides in from the right edge.
            </SidepanelDescription>
          </SidepanelHeader>
          <div className="py-6 text-sm text-muted-foreground">
            Use standard drawer items or custom form controls here.
          </div>
          <SidepanelClose asChild>
            <Button variant="outline">Close Drawer</Button>
          </SidepanelClose>
        </SidepanelContent>
      </Sidepanel>

      <Sidepanel>
        <SidepanelTrigger asChild>
          <Button variant="secondary">Left Drawer</Button>
        </SidepanelTrigger>
        <SidepanelContent side="left">
          <SidepanelHeader>
            <SidepanelTitle>Left Side Panel</SidepanelTitle>
            <SidepanelDescription>
              This panel slides in from the left edge.
            </SidepanelDescription>
          </SidepanelHeader>
          <div className="py-6 text-sm text-muted-foreground">
            Commonly used for mobile sidebar overlays.
          </div>
        </SidepanelContent>
      </Sidepanel>
    </div>
  ),
};
