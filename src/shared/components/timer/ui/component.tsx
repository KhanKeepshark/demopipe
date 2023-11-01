import { TimeProps } from "../model/TimerProps";
import { FC } from "react";

export const Timer: FC<TimeProps> = ({ seconds, setSeconds, play }) => {
  if (play && seconds > 0) {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }
  return (
    <div className="absolute top-[340px] left-[460px] h-40 w-40 bg-white flex justify-center items-center rounded-full">
      <div className="text-7xl">{seconds}</div>
    </div>
  );
};
