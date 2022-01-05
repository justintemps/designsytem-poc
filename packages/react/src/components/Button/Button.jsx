import React from "react";
import PropTypes from "prop-types";
import { Button as UNButton } from "@un/react";
import "./button.scss";

const Button = ({ children, ...props }) => {
  return <UNButton {...props}>{children}</UNButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;