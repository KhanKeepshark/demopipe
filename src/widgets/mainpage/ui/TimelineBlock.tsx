import type { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Timeline } from "antd";
import { Button } from "@/shared/components";

export const TimelineBlock: FC = () => {
  return (
    <div className="flex justify-center h-[55rem]">
      <div className="w-11/12 h-3 flex flex-col items-center">
        <div className="flex text-2xl gap-2 text-brand-dark">
          <FaChevronDown />
          <FaChevronDown />
          <FaChevronDown />
        </div>
        <div className="mt-10 text-brand-dark font-bold text-2xl w-3/5 text-center">
          Бесплатный доступ к самостоятельному определению гибкости коленных
          суставов в домашних условиях
        </div>
        <Timeline
          mode="alternate"
          className="mt-20"
          items={[
            {
              children: (
                <div className="mb-9 px-3">
                  <div className="text-xl font-semibold">Пройти тест</div>
                  <div className="mt-2 text-base">
                    Пройдите тест для определения тонуса мышц и гибкости
                    суставов проходя по ссылке ниже
                  </div>
                </div>
              ),
              dot: <div className="bg-brand-dark h-6 w-6 rounded-full" />,
            },
            {
              children: (
                <div className="mb-9 px-3">
                  <div className="text-xl font-semibold">
                    Получить программу лечения
                  </div>
                  <div className="mt-2 text-base">
                    По результатам теста получите бесплатный доступ к
                    рекомендованной программе с лечебными упражнениями
                  </div>
                </div>
              ),
              dot: <div className="bg-brand-dark h-6 w-6 rounded-full" />,
            },
            {
              children: (
                <div className="mb-9 px-3">
                  <div className="text-xl font-semibold">
                    Запись на консультацию врача
                  </div>
                  <div className="mt-2 text-base">
                    По запросу можете записаться на платную консультацию к
                    штатному врачу, где по результатам теста и диагностики
                    назначит вам индивидуальное лечение
                  </div>
                </div>
              ),
              dot: <div className="bg-brand-dark h-6 w-6 rounded-full" />,
            },
          ]}
        />
        <div className="flex mt-10 gap-6">
          <Button className="py-4">Пройти Онлайн Тест</Button>
          <Button className="py-4 bg-brand-aqua rounded-full">
            Получить Консультацию
          </Button>
        </div>
      </div>
    </div>
  );
};
