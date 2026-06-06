# Sidebar Layout

Collapsible navigation layout components that coordinate desktop and mobile views.

---

## Try Now

<StorybookPreview id="layout-dashboard-shell--demo" height="450px" />

---

## Usage

```tsx
import { 
  SidebarLayout, 
  Sidebar, 
  SidebarGroup, 
  SidebarItem,
} from "@lablnet/ui";
import { LayoutDashboard, Settings } from "lucide-react";

export default function SidebarDemo() {
  return (
    <SidebarLayout>
      <Sidebar 
        logo={<span>Modula</span>} 
        footer={<div>Admin User</div>}
      >
        <SidebarGroup title="System">
          <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarItem>
        </SidebarGroup>
      </Sidebar>
    </SidebarLayout>
  );
}
```

---

## Customization

### Sidebar Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `React.ReactNode` | - | Branding logo displayed inside header |
| `footer` | `React.ReactNode` | - | Bottom container content |

### SidebarItem Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `React.ReactNode` | - | Leading icon alignments |
| `active` | `boolean` | `false` | Sets active highlight color |
| `href` | `string` | `"#"` | Navigation anchor URL |

### CSS Variables

Matches layout card backgrounds and border indicators:

```css
:root {
  --background: 0 0% 100%;       /* Outer wrapper background HSL */
  --card: 0 0% 100%;             /* Sidebar container background HSL */
  --border: 220 13% 91%;         /* Divider border outline HSL */
}
```
