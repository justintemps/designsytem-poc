# UN Core-based Design System POC - Installation

## Overview

Like UN Core, this project is a monorepo managed with [Lerna](https://lerna.js.org/). Once set up, it will manage the dependencies between the different packages and symlink them all together. This means that changes you make in one package are instantly available in the others.

For example, if you are developing a Component in the `react` package with Storybook, changes you make to the `styles` package will trigger a re-render so that you can see the effect they're having.

## Use the latest published version of UN Core (from npm)

1. **Clone this repository**

```bash
git clone https://github.com/justintemps/designsytem-poc.git
```

2. **Bootstrap the project**

This will install shared dependencies plus all dependencies particular to each package. This may take a while and you won't see much output, but be patient, it's working...

```bash
yarn bootstrap
```

3. **Start up Storybook**

```bash
yarn start
```

## Use local version of UN Core for development

1. **Clone the [UN Core monorepo](https://github.com/un-core/designsystem) in a separate directory**

Assuming you're in the POC directory..

```bash
cd .. && git clone https://github.com/un-core/designsystem.git
```

2. **Install dependencies**

```bash
yarn
```

3. **Build the project**

```bash
yarn build
```

4. **Create symlinks to all of the packages**

```bash
lerna exec -- yarn link
```

5. **Move back to Design System POC Repo**

```bash
cd ../design-system-poc
```

6. **Reinstall symlinked dependencies**

This will clean up old dependencies if there are any, link to the dependencies you symlinked in Step 4 and reinstall dependencies for all packages

```bash
yarn bootstrap:dev
```
