import { Button } from "antd";
import { FC } from "react";
import { ExerciseOneControlBlockModel } from "../models/ExerciseControlBlockModel";
import { clsx } from "clsx";
import { IoPlayForward } from "react-icons/io5";

export const ExerciseOneControlBlock: FC<ExerciseOneControlBlockModel> = ({
  play,
  setPlay,
  exerciseCount,
  repeatTarget,
}) => {
  return (
    <>
      <div className="absolute flex -right-0 bottom-0 p-4 bg-opacity-40 backdrop-blur bg-white rounded items-center gap-2 transform max-[1090px]:rotate-90 max-[1090px]:right-7 max-[1090px]:-bottom-32 max-[1090px]:flex-col">
        <div className="flex font-bold text-2xl">
          <div>{exerciseCount}</div>/
          <div
            className={clsx("text-red", {
              "text-green-300": exerciseCount === repeatTarget,
            })}
          >
            {repeatTarget}
          </div>
        </div>
        <Button type="primary" className="rounded bg-blue-300 h-8 py-1 px-4">
          <IoPlayForward size={20} color="white" />
        </Button>
        <Button
          type="primary"
          danger={play}
          className="text-white bg-green-400 h-8 py-1 px-2 rounded"
          onClick={() => setPlay(!play)}
        >
          {play ? "STOP" : "START"}
        </Button>
      </div>
    </>
  );
};
