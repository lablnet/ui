import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-[380px]">
      <Card>
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>Deploy your new application assets in one click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            This card encapsulates section layout structures. It utilizes backgrounds and borders defined by our design tokens.
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
