# MultiSelect

A tag-based select input supporting search, tag removals, clear actions, and dropdown selections.

---

## Try Now

<StorybookPreview id="components-multiselect--default" height="220px" />

---

## Usage

```tsx
import React from "react";
import { MultiSelect } from "@lablnet/ui";

const techOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" }
];

export default function MultiSelectDemo() {
  const [selected, setSelected] = React.useState<string[]>(["react"]);

  return (
    <div className="w-80">
      <MultiSelect 
        options={techOptions} 
        value={selected} 
        onChange={setSelected} 
        placeholder="Select framework..." 
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
| `options` | `MultiSelectOption[]` | - | Array of available options: `{ label: string, value: string }` |
| `value` | `string[]` | - | Array of active selected values |
| `onChange` | `(value: string[]) => void` | - | Triggers selection adjustments |
| `placeholder` | `string` | `"Select options..."` | Input placeholder if selection is empty |
| `disabled` | `boolean` | `false` | Sets component disabled state |

### CSS Variables

Tag badges and list highlights align with:

```css
:root {
  --secondary: 142.1 76.2% 36.3%;          /* Selected tag background HSL */
  --secondary-foreground: 355.7 100% 97.3%; /* Tag text color HSL */
  --accent: 220 14.3% 95.9%;                /* Dropdown hover item HSL */
}
```
