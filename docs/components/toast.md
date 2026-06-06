# Toast Notifications

Interactive toast notifications popping up at the bottom-right of the screen viewport.

## Setup

First, wrap your application root container in the `ToastProvider`:

```tsx
import { ToastProvider } from "@lablnet/ui";

export default function Root() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
```

---

## Usage

Import the static `toast` helper to launch status notification popups from anywhere:

```tsx
import { toast, Button } from "@lablnet/ui";

export default function ToastDemo() {
  const showNotification = () => {
    // Standard trigger
    toast({
      title: "Saving changes...",
      description: "Writing changes to configuration data logs."
    });

    // Variant shortcut triggers
    toast.success("Saved!", "Your profile preferences are up to date.");
    toast.error("Database Connection Error", "Unable to sync information.");
    toast.warning("Low Storage Space");
    toast.info("Down-time maintenance scheduled tonight.");
  };

  return <Button onClick={showNotification}>Show Toasts</Button>;
}
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | - | Bold alert title line |
| `description` | `string` | - | Secondary support text |
| `variant` | `default`, `success`, `warning`, `destructive`, `info` | `"default"` | Predefined styles matching notification status |
| `duration` | `number` | `4000` | Auto-close timeout duration in milliseconds |
