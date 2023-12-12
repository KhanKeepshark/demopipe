import { FC } from "react";
import { Carousel1, Carousel2, Carousel3 } from "@/shared/assets/images";
import { Button, Carousel } from "@/shared/components";

export const CarouselBlock: FC = () => {
  return (
    <Carousel>
      <div className="relative">
        <img
          className="h-[500px] object-cover w-full brightness-75"
          src={Carousel1}
          alt=""
        />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
          <div className="w-1/2">
            <div className="text-6xl text-white font-semibold text-center">
              INVENTIVO
            </div>
            <div className="text-2xl font-semibold text-white text-center mt-10">
              Восстановление на расстоянии - забота в каждом движении
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="h-[500px] object-cover w-full brightness-75"
          src={Carousel2}
          alt=""
        />
        <div className="absolute h-full top-0 flex flex-col justify-center items-center w-full">
          <div className="w-1/2">
            <div className="text-3xl text-white font-semibold text-center">
              ПРОЙТИ ОНЛАЙН ТЕСТ НА МОБИЛЬНОСТЬ СУСТАВОВ И ТОНУСА МЫШЦ
            </div>
            <div className="text-lg font-semibold text-white text-center mt-10">
              Боль в колене - распространенное и часто изнурительное заболевание
              от которого страдают миллионы людей вне зависимости от возраста и
              вида деятельности
            </div>
          </div>
          <Button className="mt-10" gradient>
            ПРОЙТИ ТЕСТ
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          className="h-[500px] object-cover w-full brightness-75"
          src={Carousel3}
          alt=""
        />
        <div className="absolute h-full top-0 flex flex-col justify-center items-center w-full">
          <div className="w-1/2">
            <div className="text-3xl text-white font-semibold text-center">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ВРАЧА
            </div>
            <div className="text-lg font-semibold text-white text-center mt-10">
              Получите профессиональную консультацию врача реабилитолога
            </div>
          </div>
          <Button className="mt-10" gradient>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
    </Carousel>
  );
};
