# Separator

A content divider line supporting horizontal and vertical orientations, built on `@radix-ui/react-separator`.

---

## Try Now

<StorybookPreview id="components-separator--default" height="220px" />

---

## Usage

```tsx
import { Separator } from "@lablnet/ui";

export default function SeparatorDemo() {
  return (
    <div>
      <div>
        <h4>Lablnet UI</h4>
        <p>A premium React UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Divider line direction |
| `decorative` | `boolean` | `true` | Hides the element from accessibility trees if decorative |

### CSS Variables

Uses the standard border layout variables:

```css
:root {
  --border: 220 13% 91%; /* Separator line color HSL */
}
```
