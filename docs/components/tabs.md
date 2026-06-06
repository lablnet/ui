# Tabs

Multi-panel toggle container switches backing `@radix-ui/react-tabs`.

---

## Try Now

<StorybookPreview id="components-tabs--default" height="200px" />

---

## Usage

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@lablnet/ui";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded bg-card mt-2">
          Overview panel configuration.
        </div>
      </TabsContent>
    </Tabs>
  );
}
```

---

## Customization

### Props

Inherits all standard properties of `@radix-ui/react-tabs`.

### CSS Variables

Adapt toggle colors using the layout variables:

```css
:root {
  --muted: 220 14.3% 95.9%;     /* Tabs list background HSL */
  --background: 0 0% 100%;       /* Active trigger card background HSL */
}
```
