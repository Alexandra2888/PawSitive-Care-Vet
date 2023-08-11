import "./Input.scss";

import React from "react";

const Input = ({type, id, value, onChange}) => {
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
