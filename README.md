# nextjs-rxjs

Reproduction of an issue in `next@13.5.5` and a CommonJS lib that exports an RxJS Observable.
- https://github.com/vercel/next.js/issues/56897

## How to reproduce

1. Clone this repo, and run `yarn install`
2. Run `yarn build:all`

You should see the following error:
```
[@nextjs-rxjs/app]: Process started
[@nextjs-rxjs/app]:    Linting and checking validity of types ...
[@nextjs-rxjs/app]:    Creating an optimized production build ...
[@nextjs-rxjs/app]:  ✓ Compiled successfully
[@nextjs-rxjs/app]:    Collecting page data ...
[@nextjs-rxjs/app]: TypeError: a.Observable is not a constructor
[@nextjs-rxjs/app]:     at 9155 (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:1126)
[@nextjs-rxjs/app]:     at __webpack_require__ (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/webpack-runtime.js:1:145)
[@nextjs-rxjs/app]:     at 5784 (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:542)
[@nextjs-rxjs/app]:     at __webpack_require__ (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/webpack-runtime.js:1:145)
[@nextjs-rxjs/app]:     at __webpack_exec__ (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:1436)
[@nextjs-rxjs/app]:     at /Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:1479
[@nextjs-rxjs/app]:     at __webpack_require__.X (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/webpack-runtime.js:1:2141)
[@nextjs-rxjs/app]:     at /Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:1449
[@nextjs-rxjs/app]:     at Object.<anonymous> (/Users/oliverlaz/w/playground/nextjs-rxjs/packages/app/.next/server/pages/index.js:1:1521)
[@nextjs-rxjs/app]:     at Module._compile (node:internal/modules/cjs/loader:1241:14)
[@nextjs-rxjs/app]: 
[@nextjs-rxjs/app]: > Build error occurred
[@nextjs-rxjs/app]: Error: Failed to collect page data for /
[@nextjs-rxjs/app]:     at /Users/oliverlaz/w/playground/nextjs-rxjs/node_modules/next/dist/build/utils.js:1171:15
[@nextjs-rxjs/app]:     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
[@nextjs-rxjs/app]:   type: 'Error'
[@nextjs-rxjs/app]: }

```

### Expected behaviour

The build should succeed. The code compiles with `next@~13.4`:

1. `cd packages/app`
2. `yarn add next@~13.4`
3. `yarn build:all`

The build succeeds.
