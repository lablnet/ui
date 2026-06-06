# Getting Started

Lablnet UI is a premium React component library built with accessibility, aesthetics, and customization in mind.

## Installation

Install the library and its peer dependencies via your preferred package manager:

```bash
# Using pnpm
pnpm add @lablnet/ui lucide-react

# Using npm
npm install @lablnet/ui lucide-react
```

> [!NOTE]
> Make sure `react` (>=18) and `react-dom` (>=18) are installed in your project.

## Import Styles

To use our custom Obsidian design system, import the global CSS file at the root of your application (e.g., `src/main.tsx` or `src/index.tsx`):

```typescript
import "@lablnet/ui/styles.css";
```

## Quick Example

Here is how you can use a component in your React application:

```tsx
import React from "react";
import { Button } from "@lablnet/ui";
import { Mail } from "lucide-react";

export default function App() {
  return (
    <Button 
      variant="primary" 
      leftIcon={<Mail className="h-4 w-4" />}
      onClick={() => alert("Logged in!")}
    >
      Email Login
    </Button>
  );
}
```
