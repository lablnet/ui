# Sidepanel (Sheet)

Drawer panels sliding in from the left, right, top, or bottom edges of the viewport.

---

## Try Now

<StorybookPreview id="components-sidepanel-sheet--default" height="220px" />

---

## Usage

```tsx
import {
  Sidepanel,
  SidepanelTrigger,
  SidepanelContent,
  SidepanelHeader,
  SidepanelTitle,
  SidepanelDescription,
  Button
} from "@lablnet/ui";

export default function SheetDemo() {
  return (
    <Sidepanel>
      <SidepanelTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </SidepanelTrigger>
      {/* Set side="left", "right", "top", or "bottom" */}
      <SidepanelContent side="right">
        <SidepanelHeader>
          <SidepanelTitle>Profile Details</SidepanelTitle>
          <SidepanelDescription>
            Update user credentials.
          </SidepanelDescription>
        </SidepanelHeader>
        <div className="py-4">
          {/* Custom drawer components */}
        </div>
      </SidepanelContent>
    </Sidepanel>
  );
}
```

---

## Customization

### Props

`SidepanelContent` supports:

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `"top"`, `"bottom"`, `"left"`, `"right"` | `"right"` | Which viewport edge the drawer slides out from |

### CSS Variables

Uses the standard card and background variables:

```css
:root {
  --card: 0 0% 100%;             /* Drawer background HSL */
  --border: 220 13% 91%;         /* Divider border HSL */
}
```
