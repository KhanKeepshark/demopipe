import { Input as AntInput } from "antd";
import { FC } from "react";
import { inputTextProps } from "../models/inputTextProps";
import clsx from "clsx";

export const Input: FC<inputTextProps> = ({
  errorMessage,
  wrapperClassName,
  ...rest
}) => {
  return (
    <div
      className={clsx(wrapperClassName, {
        "w-full": !wrapperClassName,
      })}
    >
      <AntInput status={errorMessage ? "error" : ""} {...rest} />
      <div className="text-Regular12 text-red">{errorMessage}</div>
    </div>
  );
};
