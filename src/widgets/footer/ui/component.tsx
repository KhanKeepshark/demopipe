import { FC } from "react";
import { FooterProps } from "../models/props";
import { AiFillInstagram } from "react-icons/ai";

const footerContent = [
  {
    title: "ПОЛЬЗОВАТЕЛЯМ",
    links: [
      { name: "Запись на консультацию", link: "" },
      { name: "Онлайн тест на суставы", link: "" },
    ],
  },
  {
    title: "ВРАЧАМ",
    links: [
      { name: "Регистрация", link: "" },
      { name: "Создать библиотеку", link: "" },
    ],
  },
  {
    title: "КОНТАКТЫ",
    links: [
      { name: "+7702 103 89 36", link: "" },
      { name: "Whatsapp", link: "" },
      { name: "Email", link: "" },
      { name: "Пользовательское соглашение", link: "" },
      {
        name: "Политика о конфиденциальности и обработки персональных данных",
        link: "",
      },
    ],
  },
];

export const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex justify-between mt-10 h-fit bg-brand-dark py-20 px-40">
      <div className="w-60">
        <div className="h-6 w-6 bg-brand-secondary flex justify-center items-center rounded-full">
          <AiFillInstagram />
        </div>
        <div className="text-brand-secondary mt-5">© 2023 Inventivo</div>
      </div>
      {footerContent.map((content) => (
        <div key={content.title} className="w-60">
          <div className="text-white font-semibold text-xl">
            {content.title}
          </div>
          {content.links.map((link) => (
            <div key={link.name} className="text-brand-secondary text-sm mt-5">
              <a href={link.link}>{link.name}</a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
