import { TimeProps } from "../model/TimerProps";
import { FC } from "react";

export const Timer: FC<TimeProps> = ({ seconds, setSeconds, play }) => {
  if (play && seconds > 0) {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }
  return (
    <div className="absolute sm:top-[340px] sm:left-[460px] sm:h-40 sm:w-40 bg-white flex justify-center items-center rounded-full w-20 h-20 top-1/3 left-[40%]">
      <div className="sm:text-7xl text-4xl">{seconds}</div>
    </div>
  );
};
