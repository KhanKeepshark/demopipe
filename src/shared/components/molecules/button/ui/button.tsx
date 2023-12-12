import clsx from "clsx";
import { FC } from "react";
import { ButtonProps } from "../models/props";

export const Button: FC<ButtonProps> = ({ children, className, gradient }) => {
  return (
    <div
      className={clsx(
        "px-8 py-3 cursor-pointer hover:brightness-110 active:brightness-90",
        {
          "bg-gradient-to-br from-brand-gradient1 to-brand-gradient2 backdrop:bg-black rounded-full font-semibold text-white":
            gradient,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
