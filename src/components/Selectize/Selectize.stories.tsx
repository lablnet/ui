import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Selectize, type SelectizeOption } from "./Selectize";

const meta: Meta<typeof Selectize> = {
  title: "Components/Selectize (Combobox)",
  component: Selectize,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Selectize>;

const initialOptions = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "Python", value: "py" },
  { label: "Ruby", value: "rb" },
  { label: "Rust", value: "rs" },
];

export const SingleSelect: Story = {
  render: () => {
    const [val, setVal] = React.useState<string>("ts");
    const [opts, setOpts] = React.useState<SelectizeOption[]>(initialOptions);

    const handleCreate = (newLabel: string) => {
      const newVal = newLabel.toLowerCase().replace(/\s+/g, "-");
      const newOpt = { label: newLabel, value: newVal };
      setOpts((prev) => [...prev, newOpt]);
      setVal(newVal);
    };

    return (
      <div className="w-80">
        <Selectize
          options={opts}
          value={val}
          onChange={setVal}
          onCreateOption={handleCreate}
          placeholder="Select or type language..."
          isMulti={false}
        />
        <div className="mt-4 text-xs text-muted-foreground">
          Selected: {val}
        </div>
      </div>
    );
  },
};

export const MultiSelectize: Story = {
  render: () => {
    const [val, setVal] = React.useState<string[]>(["js", "ts"]);
    const [opts, setOpts] = React.useState<SelectizeOption[]>(initialOptions);

    const handleCreate = (newLabel: string) => {
      const newVal = newLabel.toLowerCase().replace(/\s+/g, "-");
      const newOpt = { label: newLabel, value: newVal };
      setOpts((prev) => [...prev, newOpt]);
      setVal((prev) => [...prev, newVal]);
    };

    return (
      <div className="w-80">
        <Selectize
          options={opts}
          value={val}
          onChange={setVal}
          onCreateOption={handleCreate}
          placeholder="Select or type tag..."
          isMulti={true}
        />
        <div className="mt-4 text-xs text-muted-foreground">
          Selected tags: {JSON.stringify(val)}
        </div>
      </div>
    );
  },
};
