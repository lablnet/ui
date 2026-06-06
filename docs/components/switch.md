# Switch

An accessible sliding toggle key control.

---

## Try Now

<StorybookPreview id="components-switch--default" height="160px" />

---

## Usage

```tsx
import React from "react";
import { Switch, Label } from "@lablnet/ui";

export default function SwitchDemo() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Current toggled active value |
| `onCheckedChange` | `(checked: boolean) => void` | - | Triggers toggle adjustments |

### CSS Variables

Toggle background colors coordinate with:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Checked background HSL */
  --muted: 220 14.3% 95.9%;        /* Unchecked track HSL */
}
```
