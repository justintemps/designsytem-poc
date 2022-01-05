import ILOProvider from "../src/components/ILOProvider";
import "./styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withILOThemeProvider = (Story) => (
  <ILOProvider>
    <Story />
  </ILOProvider>
);

export const decorators = [withILOThemeProvider];
