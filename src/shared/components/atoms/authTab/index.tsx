import clsx from "clsx";
import { FC } from "react";
import { AuthTabProps } from "./props";

export const AuthTab: FC<AuthTabProps> = ({
  tab1,
  tab2,
  active,
  setActive,
}) => {
  return (
    <div className="flex relative h-fit items-center justify-between">
      <div
        className={clsx("cursor-pointer", {
          "text-brand-gradient1": !active,
        })}
        onClick={() => setActive(false)}
      >
        <div className="font-bold ml-7 text-lg relative">{tab1}</div>
        <div className="bg-black mt-1 w-56 border" />
      </div>
      <div className="h-0.1 bg-black w-14 transform rotate-120" />
      <div
        className={clsx("cursor-pointer", {
          "text-brand-gradient1": active,
        })}
        onClick={() => setActive(true)}
      >
        <div className="font-bold ml-7 text-lg relative">{tab2}</div>
        <div className="bg-black mt-1 w-56 border" />
      </div>
    </div>
  );
};
