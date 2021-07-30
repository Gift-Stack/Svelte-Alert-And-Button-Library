# svelt-component-library\

## This library includes:

-   Button components
-   Alert components
-   Testing using svelte-testing-library + Jest
-   Storybook
-   Rollup, configured to build .js (umd), .min.js (iife), .mjs (es)

## Setting up

-   Run `npm install buttons-and-alerts` (or `yarn add buttons-and-alerts`)

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which
allows Svelte apps to import the source code directly, if they are using a
bundler plugin like
[rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or
[svelte-loader](https://github.com/sveltejs/svelte-loader) (where
[`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields)
in your webpack config includes `"svelte"`). **This is recommended.**

### Based on sveltejs/component-template

I couldn't find an opinionated components library template to my liking, so I
used
[sveltejs/component-template](https://github.com/sveltejs/component-template) as
base. And then I added minified build configuration using terser plugin +
tests + storybook.

### Description

This application was built with Svelte and storybook for checking out the
amazing components. You can check out more om [Svelte]
(https://https://svelte.dev/) and
[storybook](https://storybook.js.org/docs/svelte/) on their individual websites
