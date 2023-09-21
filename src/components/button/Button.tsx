import React from "react";
import "./Button.scss";
import { ButtonProps } from "../../interfaces/components/ButtonProps";

const Button = (props: ButtonProps): React.ReactElement => {
  const { className, children, onClick } = props;

  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
