import type { FC } from "react";
import { exer1, exer2, exer3, exer4 } from "@/shared/assets";
import { useNavigate } from "react-router-dom";

const Exercises = [
  {
    img: exer1,
    title: "УПРАЖНЕНИЕ 1",
    text: "Разгибание коленей лежа со скольжением ",
    link: "1",
  },
  {
    img: exer2,
    title: "УПРАЖНЕНИЕ 2",
    text: "Разгибание коленей лежа со скольжением ",
    link: "2",
  },
  {
    img: exer3,
    title: "УПРАЖНЕНИЕ 3",
    text: "Разгибание коленей лежа со скольжением ",
    link: "3",
  },
  {
    img: exer4,
    title: "УПРАЖНЕНИЕ 4",
    text: "Разгибание коленей лежа со скольжением ",
    link: "4",
  },
];

export const ExercisesWidget: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-Bold16">Библиотека Упражнении</div>
      <div className="w-full bg-white px-10 py-6 mt-6 rounded-xl">
        {Exercises.map((exer) => (
          <div
            className="flex items-center gap-6 mb-6 hover:bg-slate-300 cursor-pointer"
            key={exer.text}
            onClick={() => navigate(`/exercise/${exer.link}`)}
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
