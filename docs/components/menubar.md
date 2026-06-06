# Menubar

A top-level horizontal navigation menu container built on `@radix-ui/react-menubar` supporting keyboard inputs.

---

## Try Now

<StorybookPreview id="components-menubar--default" height="220px" />

---

## Usage

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut
} from "@lablnet/ui";

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

---

## Customization

### Props

All Menubar sub-components inherit properties of `@radix-ui/react-menubar`.

### CSS Variables

Matches background, popover and input border properties:

```css
:root {
  --border: 220 13% 91%;         /* Outline border HSL */
  --popover: 0 0% 100%;          /* Submenu background HSL */
}
```
