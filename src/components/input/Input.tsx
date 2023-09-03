import "./Input.scss";
import {InputProps} from "../../interfaces/components/InputProps";
import React from "react";

const Input: React.FC<InputProps> = ({type, id, value, onChange}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  );
};

export default Input;
