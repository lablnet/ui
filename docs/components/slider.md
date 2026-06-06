# Slider

An interactive range slider for single or double selection values, built on `@radix-ui/react-slider`.

---

## Try Now

<StorybookPreview id="components-slider--single-value" height="180px" />

---

## Usage

```tsx
import React from "react";
import { Slider } from "@lablnet/ui";

export default function SliderDemo() {
  const [val, setVal] = React.useState([40]);

  return (
    <Slider 
      defaultValue={[40]} 
      max={100} 
      step={1} 
      value={val} 
      onValueChange={setVal} 
    />
  );
}
```

---

## Customization

### Props

Inherits all standard properties of `@radix-ui/react-slider`.

### CSS Variables

Slider elements track and thumb styles correspond to:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Track range and thumb border HSL */
  --muted: 220 14.3% 95.9%;     /* Unfilled track background HSL */
}
```
