# Select

A styled single choice selector dropdown list backing `@radix-ui/react-select`.

---

## Try Now

<StorybookPreview id="components-select-dropdown--default" height="220px" />

---

## Usage

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel
} from "@lablnet/ui";

export default function SelectDemo() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Appearance</SelectLabel>
          <SelectItem value="light">Light Theme</SelectItem>
          <SelectItem value="dark">Obsidian Dark</SelectItem>
          <SelectItem value="system">System Default</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

---

## Customization

### Props

`SelectTrigger`, `SelectContent`, and `SelectItem` support all standard options of `@radix-ui/react-select`.

### CSS Variables

Customize select container popups and trigger states:

```css
:root {
  --popover: 0 0% 100%;             /* Dropdown options background HSL */
  --accent: 220 14.3% 95.9%;        /* Item highlight background HSL */
}
```
