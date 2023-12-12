import { FC } from "react";
import { NavbarProps } from "../models/props";
import { NavButton, NavLink } from "@/shared/components";

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex h-16 items-center justify-between">
      <div className="flex gap-10 ml-20">
        <NavLink text="Пользователи" to="" />
        <NavLink text="Врачи" to="" />
        <NavLink text="О нас" to="" />
        <NavLink text="Услуги" to="" />
        <NavLink text="Контакты" to="" />
      </div>
      <div className="flex items-center justify-between mr-10">
        <div className="flex mr-10 gap-3">
          <NavButton text="ПРОЙТИ ТЕСТ" to="" />
          <NavButton text="ЗАПИСЬ НА КОНСУЛЬТАЦИЮ" to="" />
        </div>
        <NavLink text="Қаз" to="" />
      </div>
    </div>
  );
};
