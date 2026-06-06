# Tooltip

Floating information cards displayed on hovering hover triggers, built on `@radix-ui/react-tooltip`.

---

## Try Now

<StorybookPreview id="components-tooltip--default" height="180px" />

---

## Usage

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from "@lablnet/ui";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>More information details here.</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

---

## Customization

### Props

`TooltipContent` supports:

| Prop | Type | Default | Description |
|---|---|---|---|
| `sideOffset` | `number` | `4` | Height distance spacing from target trigger |

### CSS Variables

Matches layout popover color tokens:

```css
:root {
  --popover: 0 0% 100%;             /* Tooltip background card HSL */
  --popover-foreground: 224 71.4% 4.1%; /* Text foreground label HSL */
}
```
