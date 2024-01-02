import { AuthTab, Button, Input, LinkButton } from "@/shared/components";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { Button as AntButton } from "antd";
import { Controller, useForm } from "react-hook-form";
import type { UserRegisterData } from "../models/RegistationModel";
import { authApi } from "@/shared/api/authApi";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/shared/components/atoms/checkbox";

export const RegistrationWidget: FC = () => {
  const [doctorAuth, setDoctorAuth] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterData>();

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async ({ agreement, ...data }: UserRegisterData) => {
      if (doctorAuth) {
        const user = await authApi.registerDoctor(data);
        console.log(user);
      } else {
        await authApi.registerUser(data);
      }
      navigate("/account");
    },
    [doctorAuth],
  );

  return (
    <div className="my-40 flex justify-center items-center">
      <div className="w-[600px] px-10 h-2/5 flex flex-col items-center">
        <AuthTab
          active={doctorAuth}
          setActive={setDoctorAuth}
          tab1="Пользователь"
          tab2="Врач"
        />
        <Controller
          control={control}
          name="name"
          rules={{ required: "Введите имя" }}
          render={({ field }) => (
            <Input
              className="mt-10 border-black"
              placeholder="ИМЯ"
              errorMessage={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="surname"
          rules={{ required: "Введите фамилию" }}
          render={({ field }) => (
            <Input
              className="mt-3 border-black"
              placeholder="ФАМИЛИЯ"
              errorMessage={errors?.surname?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              className="mt-3 border-black"
              placeholder="ЭЛЕКТРОННАЯ ПОЧТА"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNum"
          rules={{ required: "Введите номер" }}
          render={({ field }) => (
            <Input
              className={"mt-3 border-black"}
              placeholder="ТЕЛЕФОН"
              errorMessage={errors?.phoneNum?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Введите пароль" }}
          render={({ field }) => (
            <Input
              className="mt-3 border-black"
              placeholder="СОЗДАТЬ ПАРОЛЬ"
              errorMessage={errors?.password?.message}
              {...field}
            />
          )}
        />
        <Button className="mt-6" onClick={() => handleSubmit(onSubmit)()}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
        <AntButton
          type="link"
          onClick={() => navigate("/authorization")}
          className="mt-4"
        >
          АВТОРИЗОВАТЬСЯ
        </AntButton>
        <div className="flex items-start mt-5 relative">
          <Controller
            control={control}
            name="agreement"
            rules={{ required: true }}
            render={({ field }) => (
              <Checkbox {...field} className="absolute -left-6" />
            )}
          />
          <div className="text-center text-sm">
            <LinkButton to="/confidential">Пользования</LinkButton>и
            <LinkButton to="/useragreement">
              Обработки Персональных Данных
            </LinkButton>
            ознакомлен и полностью согласен
            <div className="text-red inline-block">
              {errors.agreement && "*"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
