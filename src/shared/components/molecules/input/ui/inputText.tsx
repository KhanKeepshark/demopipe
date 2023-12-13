import { Input as AntInput, InputProps } from "antd";
import { FC } from "react";

export const Input: FC<InputProps> = ({ ...rest }) => {
  return <AntInput {...rest} />;
};
