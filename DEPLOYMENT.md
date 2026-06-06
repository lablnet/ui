# Deployment & NPM Publishing Guidelines

This guide details how to deploy the documentation website and publish the UI package to the NPM registry.

---

## 1. Cloudflare Pages Deployment

Cloudflare Pages hosts the combined static documentation site and interactive Storybook previews.

### Build and Serving Setup

The documentation build compiles the UI library components, builds the static Storybook site, and places the story files directly into VitePress's output:
- **Build Command**: `pnpm docs:build`
- **Output Directory**: `docs/.vitepress/dist`

### Setting up on Cloudflare

1. Go to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
2. Select your repository.
3. Configure the **Build Settings**:
   - **Framework Preset**: `None`
   - **Build Command**: `pnpm docs:build`
   - **Build Output Directory**: `docs/.vitepress/dist`
4. Add **Environment Variables**:
   - Name: `NODE_VERSION`, Value: `20` (forces Node.js version 20+).
5. Click **Save and Deploy**.

---

## 2. Publishing to NPM Registry

To distribute `@lablnet/ui` as a package on npm:

### Step A: Configure package.json
Ensure the following fields are correctly defined in your `package.json`:
- `name`: `@lablnet/ui` (Use your own scope/org if needed)
- `version`: Matches target version (e.g., `1.0.0`)
- `files`: Include `"dist"` to package onlycompiled assets.
- `publishConfig`: If using a scoped package name, define public access:
  ```json
  "publishConfig": {
    "access": "public"
  }
  ```

### Step B: Log in to NPM
Verify you are logged in to the registry:
```bash
npm login
# or using pnpm
pnpm login
```

### Step C: Build and Test Locally (Dry Run)
Before publishing, compile the ES module, CommonJS module, style assets, and typescript declarations:
```bash
pnpm build
```
You can generate a local tarball to inspect the packaged contents:
```bash
pnpm pack
```
This creates a `.tgz` file. You can install this file in a local test application to verify your imports:
```bash
npm install ../path-to-archive/lablnet-ui-1.0.0.tgz
```

### Step D: Update the Package Version
Increment the semantic version:
```bash
# Options: patch (1.0.1), minor (1.1.0), major (2.0.0)
npm version patch
```

### Step E: Publish
Publish the package to the public registry:
```bash
pnpm publish --no-git-checks
```

---

## 3. CI/CD Release Automation (Optional)

You can automate publishing using GitHub Actions. Create a file `.github/workflows/release.yml` with the following configuration:

```yaml
name: Release Package

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Install Pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
          registry-url: 'https://registry.npmjs.org'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Build Library
        run: pnpm build

      - name: Publish to NPM
        run: pnpm publish --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Generate an automation token on [npmjs.com](https://www.npmjs.com/) and save it as `NPM_TOKEN` in your GitHub repository's actions secrets.
