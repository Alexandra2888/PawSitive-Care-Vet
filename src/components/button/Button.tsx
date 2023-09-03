import React from 'react';
import "./Button.scss";
import { ButtonProps } from '../../interfaces/components/ButtonProps';

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button className="btn" onClick={onClick}>{children}</button>
  )
}

export default Button;