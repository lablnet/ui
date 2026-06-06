# Breadcrumb

A styled breadcrumb trace layout indicating current hierarchy trails.

---

## Try Now

<StorybookPreview id="components-breadcrumb--default" height="150px" />

---

## Usage

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@lablnet/ui";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

---

## Customization

### Component Props

Inherits standard HTML `<nav>` element attributes.

### CSS Variables

Uses the standard text foreground and muted tokens:

```css
:root {
  --foreground: 224 71.4% 4.1%; /* Active page HSL */
  --muted-foreground: 220 8.9% 46.1%; /* Link HSL */
}
```
