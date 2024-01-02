import { PatternFormat } from "react-number-format";

import type { FC } from "react";
import type { InputPhoneProps } from "../models/InputPhoneProps";
import clsx from "clsx";

export const InputPhone: FC<InputPhoneProps> = ({
  onChange,
  placeholder,
  errorMessage,
  value,
  className,
}) => {
  return (
    <div
      className={clsx(className, {
        "w-full": !className,
      })}
    >
      <div className="border py-1 px-3 rounded-md border-secondary">
        <PatternFormat
          className="text-Regular14 placeholder:text-Regular14 placeholder:text-md focus:border-0 focus-visible:border-0 focus-visible:outline-none group"
          format="+7 (###) ### ## ##"
          onChange={(event) => onChange(event)}
          mask="_"
          value={value}
          placeholder={placeholder ?? "Ваш номер телефона"}
        />
      </div>
      <div className="text-Regular12 text-red">{errorMessage}</div>
    </div>
  );
};
