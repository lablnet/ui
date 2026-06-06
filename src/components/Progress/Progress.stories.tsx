import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Progress> = {
  render: () => {
    const [value, setValue] = React.useState(10);

    React.useEffect(() => {
      const timer = setTimeout(() => setValue(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="w-[400px] space-y-4">
        <Progress value={value} />
        <div className="text-xs text-muted-foreground text-center">
          Loading progress: {value}%
        </div>
      </div>
    );
  },
};
