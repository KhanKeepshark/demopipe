import { FC, useCallback, useMemo } from "react";
import { ExerciseEndProps } from "../models/ExerciseEndProps";

export const ExerciseEnd: FC<ExerciseEndProps> = ({ angles }) => {
  const getAverage = useCallback(
    (nums: number[]) => Math.trunc(nums.reduce((a, b) => a + b) / nums.length),
    [],
  );

  const [first, second] = useMemo(() => {
    const firstPart = angles.slice(0, 6);
    const secondPart = angles.slice(6);
    return [firstPart, secondPart];
  }, [angles]);

  return (
    <>
      <div className="absolute top-40 left-56 rounded-xl w-[600px] bg-white p-6">
        <div className="flex flex-col items-center">
          <div className="text-lg text-center">
            Ваш средний показатель угла подьема ноги по первому упражнению
          </div>
          <div className="text-4xl mt-2">{getAverage(first)}°</div>
          <div className="text-lg text-center mt-6">
            Ваш средний показатель угла подьема ноги по второму упражнению
          </div>
          <div className="text-4xl mt-2">{getAverage(second)}°</div>
          <div className="text-center mt-4 text-lg">
            По данным результатам для улучшения здоровья вам доступно бесплатно
            рекомендуемая врачом программа упражнений:
          </div>
          {getAverage(first) < 60 && getAverage(second) < 80 ? (
            <a
              className="p-3 bg-slate-400 rounded-lg font-medium mt-4 hover:bg-slate-300"
              href="http://inventivo.io/programmlight"
            >
              Программа 1
            </a>
          ) : (
            <a
              className="p-3 bg-slate-400 rounded-lg font-medium mt-4 hover:bg-slate-300"
              href="http://inventivo.io/programmadvanced"
            >
              Программа 2
            </a>
          )}
          <a
            className="text-blue-700 hover:text-blue-500 mt-5"
            href="https://inventivo.io/"
          >
            Вернуться на главную страницу
          </a>
        </div>
      </div>
    </>
  );
};
