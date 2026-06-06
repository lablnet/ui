# Avatar

An image container for displaying profiles with initial fallbacks and loading states, built on `@radix-ui/react-avatar`.

---

## Try Now

<StorybookPreview id="components-avatar--with-image" height="180px" />

---

## Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@lablnet/ui";

export default function AvatarDemo() {
  return (
    <div className="flex gap-4">
      {/* With Profile Image */}
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      {/* Fallback Initials */}
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

---

## Customization

### Props

`Avatar`, `AvatarImage`, and `AvatarFallback` support all standard options of `@radix-ui/react-avatar`.

### CSS Variables

Fallback backgrounds are configured via:

```css
:root {
  --muted: 220 14.3% 95.9%; /* Fallback background HSL */
  --muted-foreground: 220 8.9% 46.1%; /* Text fallback HSL */
}
```
