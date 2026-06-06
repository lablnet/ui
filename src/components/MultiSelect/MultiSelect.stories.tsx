import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { MultiSelect } from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = React.useState<string[]>(["react", "next"]);
    return (
      <div className="w-80">
        <MultiSelect options={options} value={val} onChange={setVal} placeholder="Select technologies..." />
        <div className="mt-4 text-xs text-muted-foreground">
          Selected values: {JSON.stringify(val)}
        </div>
      </div>
    );
  },
};
