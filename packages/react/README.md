# UN Core-based Design System POC - React Package

This package provides the implementation of the Design System using [React](https://reactjs.org/). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of React components.

This is just a POC, so the package doesn't expose components or include a build step. Only the Storybook project is implemented.

## UN Core Provider

`@un/react` requires that components be wrapped with a top level `<UNCoreProvider />` component that provides customization options.

```js
import { UNCoreProvider } from "@un/react";
import theme from "../../theme.json";

const ILOProvider = ({ children }) => (
  <UNCoreProvider prefix="ilo">{children}</UNCoreProvider>
);
```

Currently the `<UNCoreProvider />` accepts a single required prop `prefix` a string which is used to set the prefix for all of the component classes.

## Styling

Use the `styles` package to manage styling for React components
