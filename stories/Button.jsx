import React from "react";
import PropTypes from "prop-types";
import { Button as Btn } from "@wfp/ui";
import "./button.css";

export const Button = ({ children, ...props }) => {
  return (
    <Btn type="button" {...props}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
