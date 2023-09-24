import React from "react";

import "./Input.scss";
import { InputProps } from "../../interfaces/components/InputProps";


const Input: React.FC<InputProps> = ({ type, id, value, onChange }) => {
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
