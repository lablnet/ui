# Label

An accessible label typography component that links form elements for screen-readers.

---

## Try Now

<StorybookPreview id="components-label--default" height="150px" />

---

## Usage

```tsx
import { Label, Input } from "@lablnet/ui";

export default function FormExample() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="you@domain.com" />
    </div>
  );
}
```

---

## Customization

### Props

Inherits all standard properties of `@radix-ui/react-label`.

### CSS Variables

The typography color coordinates with the foreground theme token:

```css
:root {
  --foreground: 224 71.4% 4.1%; /* Default light mode label text HSL */
}
.dark {
  --foreground: 210 40% 98%;   /* Obsidian dark mode label text HSL */
}
```
