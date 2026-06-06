# Card

A layout wrapper container supporting headers, titles, descriptions, body content, and footer actions.

---

## Try Now

<StorybookPreview id="components-card--default" height="280px" />

---

## Usage

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  Button 
} from "@lablnet/ui";

export default function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Setup details to access assets.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Main description values.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  );
}
```

---

## Customization

### Props

`Card` and its sub-components accept standard HTML `div` properties and classes.

### CSS Variables

Set background and text colors:

```css
:root {
  --card: 0 0% 100%;             /* Card body HSL */
  --card-foreground: 224 71.4% 4.1%; /* Text foreground HSL */
  --border: 220 13% 91%;         /* Outline border HSL */
}
```
