import React from "react";
import PropTypes from "prop-types";
import { Button as UNButton } from "@un/react";
import "@un/styles/scss/components/button/_index.scss";
import "./button.scss";

const Button = ({ children, ...props }) => {
  return (
    <UNButton kind="primary" {...props}>
      {children}
    </UNButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
