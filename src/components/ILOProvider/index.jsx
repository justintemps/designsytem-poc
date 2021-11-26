import React from "react";
import PropTypes from "prop-types";
import { UNCoreProvider } from "@wfp/ui";
import theme from "../../theme.json";

const ILOProvider = ({ children }) => (
  <UNCoreProvider {...theme}>{children}</UNCoreProvider>
);

ILOProvider.propTypes = {
  children: PropTypes.node,
};

export default ILOProvider;
