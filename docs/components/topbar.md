# Top Bar

Sticky header navigation layouts hosting actions, search controls, avatars, and sidebar triggers.

---

## Try Now

Refer to the interactive shell rendering on the [Sidebar page](./sidebar.md).

---

## Usage

```tsx
import { TopBar, Input, Avatar, AvatarFallback } from "@lablnet/ui";
import { Search } from "lucide-react";

export default function HeaderDemo() {
  return (
    <TopBar 
      leftContent={<span className="text-sm font-semibold">Overview</span>}
      rightContent={
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      }
    >
      <Input 
        placeholder="Search..." 
        leftIcon={<Search className="h-4 w-4" />} 
        className="max-w-xs h-9" 
      />
    </TopBar>
  );
}
```

---

## Customization

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `leftContent` | `React.ReactNode` | - | Alignments to the left of the header |
| `rightContent` | `React.ReactNode` | - | Alignments to the right of the header |

### CSS Variables

Uses the standard card popover and blur effects:

```css
:root {
  --card: 0 0% 100%;             /* Header background HSL */
  --border: 220 13% 91%;         /* Bottom border line HSL */
}
```
