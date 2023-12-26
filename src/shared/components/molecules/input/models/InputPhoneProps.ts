import { ChangeEventHandler } from "react";

export interface InputPhoneProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  className?: string;
}
