# Table

A styled table layout for displaying structured datasets.

---

## Try Now

<StorybookPreview id="components-table--default" height="240px" />

---

## Usage

```tsx
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableCaption 
} from "@lablnet/ui";

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Invoice logs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

---

## Customization

### Props

All components support standard HTML table element parameters.

### CSS Variables

Control border lines and hover highlights:

```css
:root {
  --border: 220 13% 91%;         /* Bottom border line HSL */
  --muted: 220 14.3% 95.9%;      /* Hover row background highlight HSL */
}
```
