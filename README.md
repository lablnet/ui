# Lablnet UI

A premium, production-ready React UI component library styled with **Tailwind CSS** and backed by **Radix UI** primitives for accessibility.

## Features

- 🛠️ **27+ Core Components**: Everything from buttons and input fields to responsive collapser sidebars and programmatic alert modals.
- 🎨 **Obsidian Design Tokens**: A sleek, dark obsidian mode (`#0B0F19`) and a clean light mode out of the box, fully customizable using CSS variables.
- ♿ **Highly Accessible**: Backed by Radix UI primitive specifications, offering screen-reader compatibility and complete keyboard controls.
- 📚 **VitePress Documentation**: A complete markdown-based guide site with inline interactive Storybook "Try Now" playgrounds.
- 📓 **Storybook Stories**: Storybook coverage for all components to easily develop and verify components.

---

## Installation

Install the package and its peer dependencies via your preferred package manager:

```bash
# Using pnpm
pnpm add @lablnet/ui lucide-react

# Using npm
npm install @lablnet/ui lucide-react
```

## Quick Start

Import the CSS variables stylesheet at the root of your application (`index.tsx` or `main.tsx`):

```typescript
import "@lablnet/ui/styles.css";
```

Then import and use any component:

```tsx
import React from "react";
import { Button } from "@lablnet/ui";
import { Send } from "lucide-react";

export default function App() {
  return (
    <Button 
      variant="primary" 
      rightIcon={<Send className="h-4 w-4" />}
      onClick={() => alert("Message Sent!")}
    >
      Send Message
    </Button>
  );
}
```

---

## Scripts & CLI Commands

Inside the workspace directory, you can run the following development commands:

```bash
# Compile library ES & CJS bundles
pnpm build

# Launch local Storybook preview server (port 6006)
pnpm storybook

# Launch local VitePress documentation server
pnpm docs:dev

# Build unified VitePress site and static Storybook previews for deployment
pnpm docs:build
```

---

## Cloudflare Pages Deployment

Deploy your documentation and static Storybook preview folder by setting the build settings on Cloudflare Pages:
- **Build Command**: `pnpm docs:build`
- **Output Directory**: `docs/.vitepress/dist`
- **Environment Variable**: Set `NODE_VERSION` to `20`.

---

## Publishing to NPM Registry

To publish the UI library package to the public NPM registry:

### 1. Build the assets
Compile the ES module, CommonJS files, CSS styling, and typescript declarations:
```bash
pnpm build
```

### 2. Log in and Bump Version
Log in to your npm account and bump the package version:
```bash
pnpm login
npm version patch # or minor / major
```

### 3. Dry Run Check
Generate a local tarball package to verify your package output:
```bash
pnpm pack
```

### 4. Publish
Publish the scoped package to the public registry:
```bash
pnpm publish --no-git-checks
```

---

## Alternative Registries

### A. GitHub Packages
To publish to your GitHub repository packages registry, update your `package.json` with:
```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```
Define your organization/user scope registry inside a `.npmrc` file:
```ini
@YOUR_ORG:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### B. Local Testing (Verdaccio)
To test publishing locally:
1. Start Verdaccio: `npx verdaccio`
2. Add a user: `npm adduser --registry http://localhost:4873/`
3. Publish: `pnpm publish --registry http://localhost:4873/ --no-git-checks`
