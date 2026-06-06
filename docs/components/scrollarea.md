# ScrollArea

A customizable scrolling container with custom-styled scrollbar tracks built on `@radix-ui/react-scroll-area`.

---

## Try Now

<StorybookPreview id="components-scrollarea--default" height="340px" />

---

## Usage

```tsx
import { ScrollArea } from "@lablnet/ui";

export default function ScrollDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-border bg-card">
      <div className="p-4">
        <h4>Versions</h4>
        <div className="py-2">v1.0.0</div>
        <div className="py-2">v1.1.0</div>
        <div className="py-2">v1.2.0</div>
      </div>
    </ScrollArea>
  );
}
```

---

## Customization

### Props

Supports all standard attributes of `@radix-ui/react-scroll-area`.

### CSS Variables

Matches outer border configurations:

```css
:root {
  --border: 220 13% 91%;         /* Scroll thumb background HSL */
}
```
