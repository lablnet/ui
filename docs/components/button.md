# Button

A premium interactive trigger button supporting multiple variants, sizes, loading indicators, and custom icons.

---

## Try Now

<StorybookPreview id="components-button--primary" height="220px" />

---

## Usage

```tsx
import { Button } from "@lablnet/ui";
import { Mail, ArrowRight } from "lucide-react";

export default function Example() {
  return (
    <div className="flex gap-4">
      {/* Visual styling variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      
      {/* Loaders and icons */}
      <Button isLoading>Processing...</Button>
      <Button leftIcon={<Mail className="h-4 w-4" />}>Mail</Button>
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive` | `"primary"` | Sets component visual design variant |
| `size` | `default`, `sm`, `lg`, `icon` | `"default"` | Component dimensions |
| `isLoading` | `boolean` | `false` | Shows loading spinner and disables trigger |
| `leftIcon` | `React.ReactNode` | - | Inner leading icon alignment |
| `rightIcon` | `React.ReactNode` | - | Inner trailing icon alignment |

### CSS Variables

Customize colors dynamically via HSL variables in your CSS:

```css
:root {
  --primary: 262.1 83.3% 57.8%;          /* Primary color HSL */
  --primary-foreground: 210 40% 98%;    /* Text color for primary button */
  --destructive: 0 84.2% 60.2%;         /* Destructive color HSL */
}
```
