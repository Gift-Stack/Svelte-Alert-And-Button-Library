# svelt-component-library\

## This library includes:

-   Button components
-   Alert components
-   Testing using svelte-testing-library + Jest
-   Storybook
-   Rollup, configured to build .js (umd), .min.js (iife), .mjs (es)

## Installation

-   Run `npm install buttons-and-alerts` (or `yarn add buttons-and-alerts`)

##
This is the [`GitHub repo`](https://github.com/Gift-Stack/Svelte-Alert-And-Button-Library) to this app


## Consuming components

The package.json has a `"svelte"` field pointing to `src/index.js`, which
allows Svelte apps to import the source code directly, if they are using a
bundler plugin like
[rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or
[svelte-loader](https://github.com/sveltejs/svelte-loader) (where
[`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields)
in your webpack config includes `"svelte"`). **This is recommended.**

### Description

This application was built with Svelte and storybook for checking out the
amazing components. You can check out more om [Svelte]
(https://https://svelte.dev/) and
[storybook](https://storybook.js.org/docs/svelte/) on their individual websites
