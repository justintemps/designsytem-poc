# UN Core-based Design System POC

This project is meant to illustrate how to create a design system using [UN Core](https://github.com/un-core/designsystem). It also has pointers for using a local symlinked version of UN Core for development of the same.

## Install

1. **Clone the repository**

```bash
git clone https://github.com/justintemps/designsytem-poc.git
```

2. **Bootstrap project**

```bash
yarn setup-dev
```

3. Start storybook

```bash
yarn storybook
```

## Use local version of UN Core for development

1. **Clone the UN Core monorepo**

```bash
git clone https://github.com/un-core/designsystem.git
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

5. **Move to Design System POC Repo**

```bash
cd design-system-poc
```

6. **Clean dependencies**

```bash
yarn clean
```

7. **Add symlinks**

```bash
yarn link @un/icons
yarn link @un/icons-react
yarn link @un/layout
yarn link @un/styles
yarn link @un/themes
yarn link @un/type
yarn link @un/react
```

8. **Reinstall dependencies**

```bash
yarn
```
