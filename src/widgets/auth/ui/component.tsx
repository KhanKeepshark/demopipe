import { AuthTab, Button, Input, LinkButton } from "@/shared/components";
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
        <Input className="mt-10 border-black" placeholder="ИМЯ" />
        <Input className="mt-3 border-black" placeholder="ФАМИЛИЯ" />
        <Input className="mt-3 border-black" placeholder="ТЕЛЕФОН" />
        <Input className="mt-3 border-black" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" />
        <Input className="mt-3 border-black" placeholder="СОЗДАТЬ ПАРОЛЬ" />
        <Button gradient className="mt-6">
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
        <div className="flex items-start mt-7 relative">
          <Checkbox className="absolute -left-6" />
          <div className="text-center text-sm">
            <LinkButton to="/confidential">Пользования</LinkButton>и
            <LinkButton to="/useragreement">
              Обработки Персональных Данных
            </LinkButton>
            ознакомлен и полностью согласен
          </div>
        </div>
      </div>
    </div>
  );
};
