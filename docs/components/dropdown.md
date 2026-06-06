# Dropdown Menu

An accessible action menu with support for submenus, keyboard shortcuts, and separators, built on `@radix-ui/react-dropdown-menu`.

---

## Try Now

<StorybookPreview id="components-dropdown-menu--default" height="220px" />

---

## Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Button
} from "@lablnet/ui";

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

## Customization

### Props

Supports all standard options of `@radix-ui/react-dropdown-menu`.

### CSS Variables

Dropdown boxes adapt dynamically using popover design tokens:

```css
:root {
  --popover: 0 0% 100%;             /* Dropdown card background HSL */
  --popover-foreground: 224 71.4% 4.1%; /* Text label HSL */
  --accent: 220 14.3% 95.9%;        /* Active hovered item background HSL */
}
```
