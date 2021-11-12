module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
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
