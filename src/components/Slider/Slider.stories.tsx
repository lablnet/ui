import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};

export default meta;

export const SingleValue: StoryObj = {
  render: () => {
    const [val, setVal] = React.useState([50]);
    return (
      <div className="w-[300px] space-y-4">
        <Slider defaultValue={[50]} max={100} step={1} value={val} onValueChange={setVal} />
        <div className="text-xs text-muted-foreground text-center">Value: {val[0]}</div>
      </div>
    );
  },
};

export const RangeValues: StoryObj = {
  render: () => {
    const [val, setVal] = React.useState([20, 80]);
    return (
      <div className="w-[300px] space-y-4">
        <Slider defaultValue={[20, 80]} max={100} step={1} value={val} onValueChange={setVal} />
        <div className="text-xs text-muted-foreground text-center">
          Range: {val[0]} - {val[1]}
        </div>
      </div>
    );
  },
};
