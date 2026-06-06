# Accordion

Vertical collapsible panels with sliding height indicators, built on `@radix-ui/react-accordion`.

---

## Try Now

<StorybookPreview id="components-accordion--default" height="220px" />

---

## Usage

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@lablnet/ui";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it styled with Tailwind?</AccordionTrigger>
        <AccordionContent>
          Yes, all styles hook directly into Tailwind CSS directives.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

## Customization

### Props

`Accordion` supports:

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `"single"`, `"multiple"` | - | Sets single panel collapse behavior |
| `collapsible` | `boolean` | `true` | Allows active items to close on click |

### CSS Variables

Customize border details:

```css
:root {
  --border: 220 13% 91%;         /* Accordion divider border line HSL */
}
```
