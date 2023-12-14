import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

export const LinkButton: FC<{
  to: string;
  children: string;
  className?: string;
}> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={clsx(
        "mx-1 text-brand-gradient1 hover:brightness-125",
        className,
      )}
    >
      {children}
    </Link>
  );
};
