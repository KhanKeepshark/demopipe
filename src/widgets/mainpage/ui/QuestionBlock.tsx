import { FC, useState } from "react";
import { QuestionBlockProps } from "../models/props";
import { PiPlusThin } from "react-icons/pi";
import clsx from "clsx";

export const QuestionBlock: FC<QuestionBlockProps> = ({
  question,
  children,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={clsx(
        "relative mt-5 overflow-hidden transition-all duration-500 ease-in-out",
        {
          "h-16": !active,
          "h-44": active,
        },
      )}
    >
      <div className="flex py-4 text-brand-aqua3 text-xl font-semibold items-center justify-between">
        {question}
        <div
          className={clsx(
            "text-black transition duration-300 ease-in-out transform text-4xl h-10 w-10 flex rounded-full justify-center items-center bg-white hover:brightness-90 cursor-pointer",
            { "rotate-45": active },
          )}
          onClick={() => setActive(!active)}
        >
          <PiPlusThin />
        </div>
      </div>
      <div className="w-4/5 font-sansArial">{children}</div>
    </div>
  );
};
