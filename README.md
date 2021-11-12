# UN Core-based Design System POC

## Install

1. **Clone the repository**

2. **Install dependencies**

```bash
yarn install
```

Note: attempting to install dependencies with npm may result in error due to the version of React specified in UN Core peer dependencies.

3. Start storybook

```bash
npm run storybook
```

## How to recreate this POC

1. **Bootstrap React project**

```bash
$ npx create-react-app designsystem-poc
```

2. **Install Storybook**

```bash
$ cd designsystem-poc
$ npx sb init
```

3. **Install UN Core**

```bash
$ yarn add @wfp/ui@alpha @wfp/icons@alpha  @wfp/icons-react@alpha  @wfp/layout@alpha  @wfp/styles@alpha  @wfp/themes@alpha  @wfp/type@alpha
```

4. Start storybook

```bash
npm run storybook
```
