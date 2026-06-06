import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="border border-border p-4 rounded-md mt-2 text-sm text-muted-foreground bg-card animate-fade-in">
            Make changes to your account settings here. Click save when you are finished.
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="border border-border p-4 rounded-md mt-2 text-sm text-muted-foreground bg-card animate-fade-in">
            Change your password details. Ensure security standards are met.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
