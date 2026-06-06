# Input

Customizable text inputs supporting icons, validation errors, and disabled states.

---

## Try Now

<StorybookPreview id="components-input--default" height="200px" />

---

## Usage

```tsx
import { Input } from "@lablnet/ui";
import { Mail, Key } from "lucide-react";

export default function InputDemo() {
  return (
    <div className="space-y-4">
      {/* With leading icon */}
      <Input leftIcon={<Mail className="h-4 w-4" />} placeholder="Email Address" />

      {/* Password with key icon */}
      <Input type="password" leftIcon={<Key className="h-4 w-4" />} placeholder="Password" />

      {/* Error state border */}
      <Input error placeholder="Invalid input value" />
    </div>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `error` | `boolean` | `false` | Focuses the borders red for validation errors |
| `leftIcon` | `React.ReactNode` | - | Displays icon inside left edge |
| `rightIcon` | `React.ReactNode` | - | Displays icon inside right edge |
| `wrapperClassName` | `string` | - | Additional class styling for wrapper wrapper div |

### CSS Variables

Input borders and focus rings correspond to standard tokens:

```css
:root {
  --input: 220 13% 91%;  /* Input border HSL */
  --ring: 262.1 83.3% 57.8%; /* Focus outline ring HSL */
}
```
