# @x12i/xtivix-core usage example

Adapter and sink contracts plus normalization, redaction, merge and id helpers for xtivix.

This consuming application demonstrates **mask a synthetic identifier before logging provider text** using the published npm package, pinned to `1.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Normalize and redact fields shared by provider log adapters.
- Derive consistent record IDs and merge metadata before storage or delivery.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xtivix-core)
- [Implementation monorepo](https://github.com/x12i/xtivix)
- [Reviewed package source](https://github.com/x12i/xtivix/tree/a87970694c9ee67967a2c51cfdbad8d39130db7a/packages/core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
