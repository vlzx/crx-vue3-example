# Chrome Extension + Vue 3 + TypeScript + Vite

## QuickStart
```shell
yarn create vite crx-vue3-example --template vue-ts
yarn add -D @crxjs/vite-plugin
```
```json
// src/manifest.json
{
  "manifest_version": 3,
  "name": "Crx Vue Example",
  "version": "1.0.0",
  "action": { "default_popup": "index.html" }
}
```
```typescript
// vite.config.js

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { crx } from "@crxjs/vite-plugin"
import manifest from './src/manifest.json'

export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
```
```shell
yarn dev
```
## Reference
[Create a Vite-React Chrome Extension in 90 seconds](https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7)
