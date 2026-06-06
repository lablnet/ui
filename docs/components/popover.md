# Popover

A click-triggered popover card wrapper supporting custom aligns and content shapes, built on `@radix-ui/react-popover`.

---

## Try Now

<StorybookPreview id="components-popover--default" height="220px" />

---

## Usage

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button, Label, Input } from "@lablnet/ui";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4>Configure details</h4>
          <div className="grid gap-2">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

---

## Customization

### Props

`PopoverContent` supports:

| Prop | Type | Default | Description |
|---|---|---|---|
| `align` | `"start"`, `"center"`, `"end"` | `"center"` | Alignment relative to trigger |
| `sideOffset` | `number` | `4` | Spacing height from target trigger |

### CSS Variables

Set dropdown popover background HSL variables:

```css
:root {
  --popover: 0 0% 100%;             /* Card HSL */
  --popover-foreground: 224 71.4% 4.1%; /* Text foreground HSL */
}
```
