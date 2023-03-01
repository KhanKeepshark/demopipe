import { DoctorMain } from "@/shared/assets/images";
import { Button } from "@/shared/components";
import type { FC } from "react";

export const DoctorBlock: FC = () => {
  return (
    <div className="h-[700px] flex flex-col items-center">
      <div className="my-16 h-[1px] w-11/12 bg-gradient-to-r from-white via-brand-gradient1 to-white" />
      <div className="w-full flex justify-between">
        <img className="w-2/5 mr-10 object-cover" src={DoctorMain} alt="" />
        <div className="w-3/5">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-brand-primary">
              САБЫРБЕК МЕЙРАМБЕК МУХАМЕТАЛИЕВИЧ
            </div>
            <div className="mt-5 font-semibold text-gray">
              ВРАЧ - РЕАБИЛИТОЛОГ | СТАЖ 9 ЛЕТ
            </div>
            <div className="w-24 bg-brand-gradient1 mt-9 h-1" />
          </div>
          <div className="mt-7 font-semibold text-lg text-gray">
            Практикующий врач - реабилитолог, эксперт в направлениях лечения
            опорно-двигательного аппарата, лечения позвоночника и спортивных
            травм, также восстановление послеоперационных вмешательств.
          </div>
          <ul className="mt-6 ml-5 text-left font-semibold list-disc text-gray">
            <li>Штатный врач платформы Inventivo</li>
            <li>
              Советник при создании упражнении лечебной гимнастики на платформе
            </li>
            <li>Мастер спорта по жиму лёжа</li>
            <li>Чемпион мира и Азии по жиму лёжа</li>
            <li>Многократный чемпион РК по пауэрлифтингу и жиму лёжа</li>
          </ul>
          <div className="mt-6 text-brand-orange font-semibold">
            Консультация онлайн:
            <span className="font-normal text-brand-gradient1 ml-2 text-lg">
              10 000тг
            </span>
          </div>
          <div className="mt-1 text-brand-orange font-semibold">
            Пакет из 3-х консультации онлайн:
            <span className="font-normal text-brand-gradient1 ml-2 text-lg">
              18 000тг
            </span>
          </div>
          <div className="mt-10 flex justify-center">
            <Button className="w-fit rounded-2xl px-12 py-4">
              Получить Консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
