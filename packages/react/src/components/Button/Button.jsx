import React from "react";
import PropTypes from "prop-types";
import { Button as UNButton } from "@un/react";
import { prefix } from "../../theme.json";

const Button = ({ children, ...props }) => {
  return (
    <UNButton {...props}>
      <span className={`${prefix}--btn--label`}>{children}</span>
    </UNButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
