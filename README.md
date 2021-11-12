# UN Core-based Design System POC

## Install

1. **Clone the repository**

```bash
git clone https://github.com/justintemps/designsytem-poc
```

2. **Install dependencies**

```bash
yarn install
```

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

## Troubleshooting

### Peer dependency conflicts

Attempting to install dependencies with npm may result in error due to the version of React specified in UN Core peer dependencies. **Installing dependencies with yarn seems to avoid this.**

### Storybook can't load jsx/tsx files

Add this custom Webpack configuration to .storybook/main.js. This should be a temporary bug, see this [GitHub issue](https://github.com/storybookjs/storybook/issues/1493#issuecomment-955190825) for more info.

```
module.exports = {
  ...
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              [
                require("@babel/preset-react").default,
                { runtime: "automatic" },
              ],
              require("@babel/preset-env").default,
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push(".js", ".jsx");

    return config;
  },
};
```
