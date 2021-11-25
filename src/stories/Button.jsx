import React from "react";
import PropTypes from "prop-types";
import { Button as Btn } from "@wfp/ui";
import "@wfp/styles/scss/components/button/_index.scss";
import "./button.scss";

export const Button = ({ children, ...props }) => {
  return (
    <Btn primary {...props}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
