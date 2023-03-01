import { AuthTab, Button, Input } from "@/shared/components";
import type { FC } from "react";
import { useCallback, useContext, useState } from "react";
import { Button as AntButton } from "antd";
import { Controller, useForm } from "react-hook-form";
import type { UserAuthorizationData } from "../models/AuthorizationModel";
import { authApi } from "@/shared/api/authApi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/shared/contexts";

export const AuthorizationWidget: FC = () => {
  const [doctorAuth, setDoctorAuth] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthorizationData>();

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: UserAuthorizationData) => {
      const user = await authApi
        .authByLogin(data)
        .then((res) => res.data.userData.user);
      setUser({
        role: user.role,
        role_id: user.role_id,
        user_id: user.userid,
      });
      navigate("/account");
    },
    [doctorAuth],
  );

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
              placeholder="ПАРОЛЬ"
              type="password"
              errorMessage={errors?.password?.message}
              {...field}
            />
          )}
        />
        <Button className="mt-6" onClick={() => handleSubmit(onSubmit)()}>
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
