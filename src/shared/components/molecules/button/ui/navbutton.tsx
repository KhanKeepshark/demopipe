import { FC } from "react";
import { Link } from "react-router-dom";
import { NavButtonProps } from "../models/props";

export const NavButton: FC<NavButtonProps> = ({ to, text }) => {
  return (
    <div className="bg-brand-secondary py-2 px-7 rounded-xl shadow-all hover:brightness-110 active:brightness-90">
      <Link className="font-bold text-sm text-brand-primary" to={to}>
        {text}
      </Link>
    </div>
  );
};
