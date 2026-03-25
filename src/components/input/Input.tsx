import React from "react";

import { InputProps } from "../../interfaces/components/InputProps";

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  required,
  placeholder = " ",
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="input-field"
    />
  );
};

export default Input;
