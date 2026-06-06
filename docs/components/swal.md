# SweetAlert (Swal)

Invoke programmatic status alert dialogs and confirmations asynchronously from within or outside React components.

---

## Try Now

<StorybookPreview id="components-sweetalert-swal--demo" height="220px" />

---

## Setup

Wrap your application root inside `SwalProvider` at the entrypoint:

```tsx
import { SwalProvider } from "@lablnet/ui";

export default function Root() {
  return (
    <SwalProvider>
      <App />
    </SwalProvider>
  );
}
```

---

## Usage

### Hook-Based Alerts

```tsx
import { useSwal, Button } from "@lablnet/ui";

export default function Demo() {
  const alertManager = useSwal();

  const handleAction = async () => {
    const result = await alertManager.fire({
      title: "Confirm Deletion?",
      text: "This action will permanently delete all records.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      confirmButtonVariant: "destructive"
    });

    if (result.isConfirmed) {
      await alertManager.fire({
        title: "Deleted!",
        text: "Records have been deleted.",
        icon: "success"
      });
    }
  };

  return <Button onClick={handleAction}>Delete</Button>;
}
```

### Static API Alerts

Trigger overlays from anywhere—such as inside Redux actions or Axios interceptors—without using standard hooks:

```tsx
import { swal } from "@lablnet/ui";

export async function onSessionTimeout() {
  await swal.fire({
    title: "Session Expired",
    text: "Please sign in again to continue.",
    icon: "info",
    confirmButtonText: "Sign In"
  });
  window.location.href = "/login";
}
```

---

## Customization

### Option Configs

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | - | Bold header text |
| `text` | `string` | - | Secondary description text |
| `html` | `React.ReactNode` | - | Renders custom React nodes below header |
| `icon` | `success`, `error`, `warning`, `info`, `question` | - | Selects standard alert icon styling |
| `showCancelButton` | `boolean` | `false` | Shows custom cancel action button |
| `confirmButtonText` | `string` | `"OK"` | Label for confirm button |
| `cancelButtonText` | `string` | `"Cancel"` | Label for cancel button |
| `confirmButtonVariant` | `Button variant` | `"primary"` | Styling class variant for confirm button |
| `cancelButtonVariant` | `Button variant` | `"outline"` | Styling class variant for cancel button |

### CSS Variables

Matches background and overlay variable properties:

```css
:root {
  --background: 0 0% 100%;       /* Dialog card background HSL */
  --border: 220 13% 91%;         /* Outline border HSL */
}
```
