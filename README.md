# UN Core-based Design System POC

## Install

1. **Clone the repository**

```bash
git clone https://github.com/justintemps/designsytem-poc.git
```

2. **Install dependencies**

```bash
yarn install
```

3. Start storybook

```bash
npm run storybook
```

## Link to Local Version of UN Core

1. **Clone the repository**

```bash
git clone https://github.com/un-core/designsystem.git
```

2. **Install dependencies**

```bash
yarn install
```

3. **Build the project**

```bash
yarn build
```

4. **Create symlinks to all of the packages**

```bash
lerna exec -- yarn link
```

5. **Move to Design System POC Repo**

```bash
yarn link @wfp/icons
yarn link @wfp/icons-react
yarn link @wfp/layout
yarn link @wfp/styles
yarn link @wfp/themes
yarn link @wfp/type
yarn link @wfp/ui
```

You may need to reinstall dependencies after this step. Recommend removing node_modules and yarn.lock files before doing that.

```bash
rm -rf node_modules yarn.lock
yarn install
```
