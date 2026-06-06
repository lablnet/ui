# Customization & Theme Tokens

Every component in Lablnet UI is styled using CSS custom properties (variables) mapped to Tailwind CSS classes. This makes theme overriding simple and fast.

## Color Tokens

The library includes variables for light and dark modes (default dark mode uses a premium Obsidian black theme).

Below is the list of variables you can override in your global CSS:

```css
:root {
  /* Core layout backgrounds */
  --background: 0 0% 100%;
  --foreground: 224 71.4% 4.1%;

  /* Component surfaces */
  --card: 0 0% 100%;
  --card-foreground: 224 71.4% 4.1%;
  --popover: 0 0% 100%;
  --popover-foreground: 224 71.4% 4.1%;

  /* Interactive colors */
  --primary: 262.1 83.3% 57.8%; /* Custom Violet */
  --primary-foreground: 210 40% 98%;
  --secondary: 142.1 76.2% 36.3%; /* Custom Emerald */
  --secondary-foreground: 355.7 100% 97.3%;

  /* Borders & Inputs */
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 262.1 83.3% 57.8%;

  /* Radius default */
  --radius: 0.5rem;
}

/* Obsidian Theme (Dark Mode) */
.dark {
  --background: 222 47% 6%; /* Deep Obsidian #0B0F19 */
  --foreground: 210 40% 98%;
  --card: 222 47% 8%; /* Obsidian surface #0e1424 */
  --popover: 222 47% 7%;
  --primary: 263.4 70% 50.4%; /* Vibrant purple */
  --secondary: 160 84% 39%; /* Vibrant Emerald */
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
}
```

## Overriding in Tailwind

If you are using Tailwind CSS in your host project, extend your configuration to map these HSL variables:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
};
```
