# UN Core-based Design System POC

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This project is meant to illustrate how to create a design system using [UN Core](https://github.com/un-core/designsystem). It also has pointers for using a local symlinked version of UN Core for development of the same.

## Install

1. **Clone the repository**

```bash
git clone https://github.com/justintemps/designsytem-poc.git
```

2. **Bootstrap project**

This will install shared dependencies plus all dependencies particular to each package. This may take a while and you won't see much output, but be patient, it's working...

```bash
yarn bootstrap
```

3. **Start storybook**

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
