# Radio Group

Multiple choice selection items backing `@radix-ui/react-radio-group`.

---

## Try Now

<StorybookPreview id="components-radio-group--default" height="200px" />

---

## Usage

```tsx
import { RadioGroup, RadioGroupItem, Label } from "@lablnet/ui";

export default function RadioDemo() {
  return (
    <RadioGroup defaultValue="card">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="card" />
        <Label htmlFor="card">Credit Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="paypal" />
        <Label htmlFor="paypal">PayPal</Label>
      </div>
    </RadioGroup>
  );
}
```

---

## Customization

### Props

`RadioGroup` and `RadioGroupItem` support all standard attributes of `@radix-ui/react-radio-group`.

### CSS Variables

Selected circular dots correspond to:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Active circle HSL */
  --border: 220 13% 91%;        /* Default border outline HSL */
}
```
