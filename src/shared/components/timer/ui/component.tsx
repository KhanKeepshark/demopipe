import { TimeProps } from "../model/TimerProps";
import { FC } from "react";

export const Timer: FC<TimeProps> = ({ seconds, setSeconds, play }) => {
  if (play && seconds > 0) {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }
  return (
    <div className="absolute xl:top-[340px] xl:left-[460px] xl:h-40 xl:w-40 bg-white flex justify-center items-center rounded-full w-20 h-20 top-1/3 left-[40%] transform rotate-90">
      <div className="xl:text-7xl text-4xl">{seconds}</div>
    </div>
  );
};
