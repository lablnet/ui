# Badge

Micro-information labels and tag indicators styled with multiple variants.

---

## Try Now

<StorybookPreview id="components-badge--primary" height="160px" />

---

## Usage

```tsx
import { Badge } from "@lablnet/ui";

export default function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant="primary">New</Badge>
      <Badge variant="secondary">Active</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Critical</Badge>
      <Badge variant="success">Completed</Badge>
      <Badge variant="warning">Pending</Badge>
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary`, `secondary`, `outline`, `destructive`, `success`, `warning` | `"primary"` | Sets component visual badge variant |

### CSS Variables

Visual colors correspond directly to primary, secondary and status tokens:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Primary HSL */
  --secondary: 142.1 76.2% 36.3%; /* Secondary HSL */
}
```
