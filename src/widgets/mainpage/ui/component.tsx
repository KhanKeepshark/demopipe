import { FC } from "react";
import { CarouselBlock } from "./CarouselBlock";
import { TimelineBlock } from "./TimelineBlock";
import { cardImg1, cardImg2 } from "@/shared/assets/images";
import { DoctorBlock } from "./DoctorBlock";
import { ServiceCard } from "./ServiceCard";
import { QuestionBlock } from "./QuestionBlock";

export const MainPageWidget: FC = () => {
  return (
    <div className="h-fit">
      <CarouselBlock />
      <div className="h-[550px] flex items-center justify-center">
        <div className="w-11/12 flex justify-between">
          <div className="w-[48%] font-bold text-5xl text-brand-primary px-2">
            Платформа для сенсорной диагностики суставов и поиска врачей
            реабилитологов
          </div>
          <div className="w-[48%] font-semibold text-brand-orange">
            Единственная инновационная платформа предоставляет сенсорную
            диагностику движения суставов и мгновенно получить данные
            мобильности суставов для пользователей от регионов до мегаполисов, а
            также получить профессиональную консультацию врача всем:
            <ul className="mt-4 font-normal">
              <li>• кого беспокоит боли в суставах</li>
              <li>• спортсменам</li>
              <li>• пациентам перенесшие операцию на суставы</li>
            </ul>
          </div>
        </div>
      </div>
      <TimelineBlock />
      <div className="h-[500px] flex items-center justify-center bg-black relative">
        <div className="w-11/12 flex justify-between">
          <div className="w-3/5 ">
            <iframe
              className="w-full h-full pr-20"
              src="https://www.youtube.com/embed/Hi5nLSAWQo0?si=Wk7_D9DFnDCu8Swz"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="w-2/5 font-semibold text-3xl text-brand-aqua2 px-2">
            Работа платформы на примере
            <ul className="mt-6 text-left text-xl font-light text-brand-aqua list-disc">
              <li>
                Сенсорное определение положения с помощью камеры компьютерного
                устройства
              </li>
              <li>
                Отслеживание динамики суставов без дополнительных датчиков
              </li>
              <li>Расчет угла сгибания сустава и показателей динамики</li>
              <li>Анализ данных в реальном времени</li>
              <li>
                Сопровождение при выполнении лечебной программы виртуальным
                ассистентом
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-10 text-white left-14 font-bold text-xl">
          INVENTIVO
          <div className="font-thin text-xs">Работа платформы на примере</div>
        </div>
      </div>
      {/* <InfoBlock /> */}
      <DoctorBlock />
      <div className="my-16 h-[1px] w-11/12 bg-gradient-to-r from-white via-brand-gradient1 to-white" />
      <div className="h-[500px] flex flex-col items-center">
        <div className="text-4xl my-4 text-brand-primary font-semibold">
          Наши Услуги
        </div>
        <div className="mt-8 text-xl">Консультация | Лечебная программа</div>
        <div className="flex mt-20 justify-between gap-10">
          <ServiceCard
            title="Консультация"
            description="Получите консультацию врача профессионала в удобное для вас время"
            buttonText="Записаться"
            buttonLink=""
            img={cardImg1}
          />
          <ServiceCard
            title="Консультация"
            description="Получите консультацию врача профессионала в удобное для вас время"
            buttonText="Записаться"
            buttonLink=""
            img={cardImg2}
          />
        </div>
      </div>
      <div className="h-fit flex flex-col items-center">
        <div className="my-16 h-[1px] w-11/12 bg-gradient-to-r from-white via-brand-gradient1 to-white" />
        <div className="w-3/5">
          <div className="text-2xl mt-4 text-brand-primary font-bold text-center">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </div>
          <QuestionBlock question="Устройства для пользование платформой">
            Платформа доступна онлайн для десктопов /персональный компьютер &
            ноутбук/
            <div>
              В скором времени доступна для мобильных устройств /смартфоны &
              планшеты/
            </div>
          </QuestionBlock>
          <QuestionBlock question="Чем может мне помочь платформа?">
            / На одной платформе вы можете пройти диагностику здоровья суставов,
            получить данные анализа и по мере необходимости запросить
            консультацию врача.
            <div> // Также дополнительная полезная информация о суставах</div>
          </QuestionBlock>
          <QuestionBlock question="Программа лечения и профилактики">
            Платформа содержит модули из упражнении лечебной гимнастики
            разработанный штатным врачом нашей команды. Описание и техника
            выполнении упражнении находятся в разделе программа. Виртуальный
            асисстент ведет выполнение упражнении в формате аудио и видео
            сопровождения
          </QuestionBlock>
          <QuestionBlock question="Прогресс и аналитика">
            По выполнению каждого упражнения в системе ведется статистика
            пользователя в личном кабинете что помогает врачам подобрать
            персонализированное лечение
          </QuestionBlock>
          <QuestionBlock question="Профессиональная консультация">
            Свяжитесь с врачом онлайн для получения профессиональной
            консультации по вопросам лечения и восстановления после травм,
            операционных вмешательств и при боли
          </QuestionBlock>
        </div>
      </div>
    </div>
  );
};
