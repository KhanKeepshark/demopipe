import { FC } from "react";
import { test1 } from "@/shared/assets";

const Exercises = [
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
  {
    img: test1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
  },
];

export const ExercisesWidget: FC = () => {
  return (
    <div>
      <div className="text-Bold16">Библиотека Упражнении</div>
      <div className="w-full bg-white px-10 py-6 mt-6 rounded-xl">
        {Exercises.map((exer) => (
          <div
            className="flex items-center gap-6 mb-6 hover:bg-slate-300 cursor-pointer"
            key={exer.text}
          >
            <img className="w-24 " src={exer.img} alt="" />
            <div>
              <span className="font-semibold">{exer.title}</span> - {exer.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
