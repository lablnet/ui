# Checkbox

A customized toggle control with checklist indicators built on `@radix-ui/react-checkbox`.

---

## Try Now

<StorybookPreview id="components-checkbox--default" height="160px" />

---

## Usage

```tsx
import { Checkbox, Label } from "@lablnet/ui";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms & conditions</Label>
    </div>
  );
}
```

---

## Customization

### Props

Inherits all standard properties of `@radix-ui/react-checkbox`.

### CSS Variables

The checkbox background and indicators adjust dynamically to your primary brand variable:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Active checked background HSL */
  --border: 220 13% 91%;        /* Default border outline HSL */
}
```
