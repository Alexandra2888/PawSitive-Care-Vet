import { ChangeEvent } from "react";

export interface InputProps {
  type: string;
  id?: string;
  value?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
