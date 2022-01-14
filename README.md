# UN Core-based Design System POC

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This project is meant to illustrate how to create a design system using [UN Core](https://github.com/un-core/designsystem).

## Installation

Follow the [installation Instructions](./docs/installation.md) to get this project up and running. These include instructions for developing with a local version of UN Core.

## Packages

- [react](./packages/react)
- [styles](./packages/styles)
- [fonts](./packages/styles)

## Commands

Bootstrap project with latest version of [UN Core from npm](https://www.npmjs.com/search?q=%40un).

```bash
yarn bootstrap
```

Bootstrap project with a local version of UN Core (see [installation instructions](./docs/installation.md)).

```bash
yarn bootstrap:dev
```

Clean dependencies from all packages.

```bash
yarn clean
```

## Architecture

The project is a monorepo which separates the different aspects and implementations of the design system into different packages. This architecture mirrors that of UN Core and allows packages to share dependencies and functionality.

For example, both the `react` package and the `twig` package would both have a dependency on the same `style` and `fonts` packages. Updating styles for the `react` package would also update styles in the `twig` package. (Note: only examples for a `react` and `twig` package are provided here).

At the same time, this allows consumers to pick and choose the packages that they need. A project that doesn't use `react` or `twig` packages can still use the `style` and `fonts` package.
