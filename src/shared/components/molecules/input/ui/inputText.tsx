import { Input as AntInput } from "antd";
import { FC } from "react";
import { inputTextProps } from "../models/inputTextProps";
import clsx from "clsx";

export const Input: FC<inputTextProps> = ({
  errorMessage,
  wrapperClassName,
  type,
  ...rest
}) => {
  return (
    <div
      className={clsx(wrapperClassName, {
        "w-full": !wrapperClassName,
      })}
    >
      {type === "password" ? (
        <AntInput.Password status={errorMessage ? "error" : ""} {...rest} />
      ) : (
        <AntInput type={type} status={errorMessage ? "error" : ""} {...rest} />
      )}
      <div className="text-Regular12 text-red">{errorMessage}</div>
    </div>
  );
};
