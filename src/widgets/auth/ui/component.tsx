import { AuthTab, Button, Input } from "@/shared/components";
import { Checkbox } from "antd";
import { FC, useState } from "react";

export const AuthWidget: FC = () => {
  const [doctorAuth, setDoctorAuth] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] px-10 h-2/5 flex flex-col items-center">
        <AuthTab
          active={doctorAuth}
          setActive={setDoctorAuth}
          tab1="Пользователь"
          tab2="Врач"
        />
        <Input className="mt-10 border-black" placeholder="ИМЯ ФАМИЛИЯ" />
        <Input className="mt-3 border-black" placeholder="ТЕЛЕФОН" />
        <Input className="mt-3 border-black" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" />
        <Button gradient className="mt-6">
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
        <div className="flex items-start mt-7 relative">
          <Checkbox className="absolute -left-6" />
          <div className="text-center text-sm">
            С условиями{" "}
            <span className=" text-brand-gradient1 cursor-pointer">
              Пользования
            </span>{" "}
            и<a className="ml-1">Обработки Персональных Данных</a>
            ознакомлен и полностью согласен
          </div>
        </div>
      </div>
    </div>
  );
};
