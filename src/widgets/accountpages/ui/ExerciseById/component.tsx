import { Button } from "@/shared/components";
import type { FC } from "react";
import { test1 } from "@/shared/assets";
import { useNavigate } from "react-router-dom";

export const ExerciseByIdWidget: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-Bold16">Библиотека Упражнении</div>
      <div className="w-full bg-white px-10 py-6 mt-6 rounded-xl">
        <Button
          className="w-fit"
          variant="primary"
          onClick={() => navigate("/exercises")}
        >
          НАЗАД
        </Button>
        <div className="mt-6 flex justify-center">
          <img width={600} src={test1} alt="exercise" />
        </div>
        <div className="mt-6">
          <div>
            <span className="font-semibold">УПРАЖНЕНИЕ 1</span> - Разгибание
            коленей лежа со скольжением
          </div>
          <div className="font-semibold mt-6">
            Исходное положение лежа. Медленно начните сгибать ногу в колене до
            45-50°, ступня должна не отрываться от пола. Выполните упражнение 10
            раз на каждую ногу
          </div>
          <div className="mt-6 flex flex-col gap-3 text-brand-primary">
            <div>
              <span className="font-bold">Выполнение:</span> 1 - 3 раза в день
            </div>
            <div>
              <span className="font-bold">Количество повторов:</span> до 12
              повторов
            </div>
            <div>
              <span className="font-bold">Количество подходов:</span> до 3
              подходов
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-fit mt-6 text-xl " variant="secondary">
              НАЧАТЬ УПРАЖНЕНИЕ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
