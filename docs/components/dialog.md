# Dialog

A popup modal window overlay that suspends main actions, built on `@radix-ui/react-dialog`.

---

## Try Now

<StorybookPreview id="components-dialog--default" height="220px" />

---

## Usage

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button
} from "@lablnet/ui";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Configuration?</DialogTitle>
          <DialogDescription>
            This action will modify application settings.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Customization

### Props

Supports all standard properties of `@radix-ui/react-dialog`.

### CSS Variables

Customize dialog backing overlay backdrop and box colors:

```css
:root {
  --background: 0 0% 100%;       /* Dialog background card HSL */
  --border: 220 13% 91%;         /* Outline border HSL */
}
.dark {
  --card: 222 47% 8%;            /* Dark mode dialog card background HSL */
  --border: 217.2 32.6% 17.5%;
}
```
