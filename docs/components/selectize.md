# Selectize (Combobox)

A searchable selector that allows typing to filter suggestions and dynamically create custom options. Supports single and multi-select modes.

---

## Try Now

<StorybookPreview id="components-selectize-combobox--single-select" height="220px" />

---

## Usage

```tsx
import React from "react";
import { Selectize, type SelectizeOption } from "@lablnet/ui";

const defaultOptions = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" }
];

export default function SelectizeDemo() {
  const [value, setValue] = React.useState<string>("ts");
  const [options, setOptions] = React.useState<SelectizeOption[]>(defaultOptions);

  const handleCreate = (newLabel: string) => {
    const newValue = newLabel.toLowerCase().replace(/\s+/g, "-");
    const newOpt = { label: newLabel, value: newValue };
    setOptions((prev) => [...prev, newOpt]);
    setValue(newValue);
  };

  return (
    <div className="w-80">
      <Selectize
        options={options}
        value={value}
        onChange={setValue}
        onCreateOption={handleCreate}
        placeholder="Select or create tag..."
        creatable={true}
        isMulti={false}
      />
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `SelectizeOption[]` | - | Available options array |
| `value` | `string` or `string[]` | - | Single value or array of values |
| `onChange` | `(value: any) => void` | - | Triggers selection adjustments |
| `onCreateOption` | `(label: string) => void` | - | Fired when creating new option tags |
| `creatable` | `boolean` | `true` | Allows user to input custom tag titles |
| `isMulti` | `boolean` | `false` | Enables multi-value outputs |

### CSS Variables

Combobox input box and dropdown options correspond to:

```css
:root {
  --popover: 0 0% 100%;             /* Dropdown background HSL */
  --border: 220 13% 91%;             /* Outline border HSL */
}
```
