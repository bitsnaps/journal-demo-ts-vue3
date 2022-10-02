# Journal Entries example - from Typescript with Vue.js 3 Course

This project is an example from the [TypeScript with Vue.js 3 Course](https://github.com/vueschool/ts-vue-boilerplate).

## How to Install
```sh
npx degit vueschool/ts-vue-boilerplate 
```
```sh
npm install
npm run dev
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Installed depdencies
for demonstrate global declaration `$http` variable:
```
npm install axios
```

## Special config:
Opt-in `reactivityTransform` feature in `vite.config.ts`:
```js
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true 
  }), ...],
  ...
});

```