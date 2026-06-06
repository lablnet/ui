# Progress

An linear progress loader bar component built on `@radix-ui/react-progress`.

---

## Try Now

<StorybookPreview id="components-progress--default" height="180px" />

---

## Usage

```tsx
import { Progress } from "@lablnet/ui";

export default function ProgressDemo() {
  return <Progress value={66} />;
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | - | Fill percentage (0 to 100) |

### CSS Variables

Set background track and slider fill colors:

```css
:root {
  --muted: 220 14.3% 95.9%;     /* Track background HSL */
  --primary: 262.1 83.3% 57.8%; /* Active progress indicator HSL */
}
```
