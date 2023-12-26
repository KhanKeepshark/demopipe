import { AuthTab, Button, Input } from "@/shared/components";
import { FC, useCallback, useState } from "react";
import { Button as AntButton } from "antd";
import { Controller, useForm } from "react-hook-form";
import { UserAuthorizationData } from "../models/AuthorizationModel";
import { authApi } from "@/shared/api/authApi";
import { useNavigate } from "react-router-dom";

export const AuthorizationWidget: FC = () => {
  const [doctorAuth, setDoctorAuth] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthorizationData>();

  const onSubmit = useCallback(
    async (data: UserAuthorizationData) => {
      if (doctorAuth) {
        const user = await authApi.authByLogin(data);
        console.log(user);
      } else {
        await authApi.registerUser(data);
        const user = await authApi.authByLogin(data);
        console.log(user);
      }

      navigate("/account");
    },
    [doctorAuth],
  );

  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] px-10 h-2/5 flex flex-col items-center">
        <AuthTab
          active={doctorAuth}
          setActive={setDoctorAuth}
          tab1="Пользователь"
          tab2="Врач"
        />
        <Controller
          control={control}
          name="phoneNum"
          rules={{ required: "Введите номер" }}
          render={({ field }) => (
            <Input
              className={"mt-10 border-black"}
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
        <Button
          gradient
          className="mt-6"
          onClick={() => handleSubmit(onSubmit)()}
        >
          АВТОРИЗОВАТЬСЯ
        </Button>
        <AntButton
          type="link"
          onClick={() => navigate("/registration")}
          className="mt-4"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </AntButton>
      </div>
    </div>
  );
};
