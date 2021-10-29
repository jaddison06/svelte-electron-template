# Svelte/Electron app

This is a project template for an Electron app using Svelte and Typescript. It lives at [jaddison06/svelte-electron-template](https://github.com/jaddison06/svelte-electron-template) and  is based on [sveltejs/template](https://github.com/sveltejs/template).
To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):
```bash
npx degit jaddison06/svelte-electron-template my-electron-app
cd my-electron-app
```
## Get started
---

Install the dependencies...

```bash
cd my-electron-app
npm install
```

...then start Rollup and Electron:

```bash
npm run electron-dev
```
## So, how does it all work?
---
The `src` directory is divided into two directories for Electron code and frontend code.

Code from the `electron` directory represents the 'backend' of the app. Currently, `electron.js` is Electron's entrypoint. It takes care of basic window initialization. `preload.js` allows you to initialize values and APIs that will be passed to the renderer thread, and lets you use Node APIs and libraries.

Code from the `frontend` directory belongs to Svelte. It represents your app's UI. `main.ts` is Svelte's entrypoint, and `App.svelte` is our main component. `global.d.ts` contains global type information.