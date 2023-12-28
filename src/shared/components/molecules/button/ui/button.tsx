import clsx from "clsx";
import type { FC } from "react";
import type { ButtonProps } from "../models/props";

const classes: { [key: string]: string } = {
  gradient:
    "px-8 py-3 bg-gradient-to-br from-brand-gradient1 to-brand-gradient2 backdrop:bg-black rounded-full font-semibold text-white",
  primary: "px-4 py-1 bg-primary text-white",
  secondary: "px-10 py-4 bg-brand-aqua3 text-primary font-bold",
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "gradient",
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "cursor-pointer hover:brightness-110 active:brightness-90",
        classes[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
