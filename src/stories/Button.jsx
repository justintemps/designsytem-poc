import React from "react";
import PropTypes from "prop-types";
// import { Button as Btn } from "@wfp/ui";
import "./button.css";

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
};
