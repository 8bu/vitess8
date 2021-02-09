# Vitess8

Minimal fork of Vitess

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa) (disabled by default, enable in `vite.config`)

- 🎨 [TailwindCSS **v2.0**](https://blog.tailwindcss.com/tailwindcss-v2) with dark mode out-of-box

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🌍 [I18n ready](./locales)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

<!-- - 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227) -->

- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦾 TypeScript, of course

<br>

## Pre-packed

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/) - with built-in dark mode!
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) - Typography for Tailwind

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA (disabled by default, enable in `vite.config`)
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [`vite-plugin-babel-import`](https://github.com/0ahz/vite-plugin-babel-import) - to work babel-plugin-import

### Coding Style

<!-- - Use Composition API with [`<script setup>` SFC](https://github.com/vuejs/rfcs/pull/227) -->

- [ESLint](https://eslint.org/) with [@vue/eslint-config-typescript](https://www.npmjs.com/package/@vue/eslint-config-typescript).

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - ...

## Usage

### Install pnpm

```bash
npm install -g pnpm
// or
curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm
// or
npx pnpm add -g pnpm
```

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
