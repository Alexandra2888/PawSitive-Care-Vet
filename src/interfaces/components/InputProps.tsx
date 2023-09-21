import { ChangeEvent } from "react";

export interface InputProps {
  type: string;
  id?: string;
  value?: string;
  className?: string;
  required?: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
