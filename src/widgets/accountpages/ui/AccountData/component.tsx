import { Button, FileUpload, Input, InputPhone } from "@/shared/components";
import { DatePicker } from "antd";
import type { FC } from "react";
import { useState } from "react";
import dayjs from "dayjs";
// import { UserContext } from "@/shared/contexts";
// import { useQuery } from "react-query";
// import { otherApi } from "@/shared/api/otherApi";

const InputsData = [
  {
    title: "ИМЯ",
    placeholder: "Андрей",
  },
  {
    title: "ФАМИЛИЯ",
    placeholder: "Андрей",
  },
  {
    title: "ПОЧТА",
    placeholder: "Андрей",
  },
  {
    title: "КВАЛИФИКАЦИЯ",
    placeholder: "Андрей",
  },
  {
    title: "СПЕЦИАЛИЗАЦИЯ",
    placeholder: "Андрей",
  },
  {
    title: "ГОРОД",
    placeholder: "Андрей",
  },
  {
    title: "ПАРОЛЬ",
    placeholder: "Андрей",
  },
];

export const AccountPageWidget: FC = () => {
  const [phone, setPhone] = useState("");
  // const { user } = useContext(UserContext);
  // TODO: change when Egor fix rests
  // const { data: doctorData } = useQuery(
  //   ["getDoctorDataById"],
  //   () => otherApi.getDoctorById(user?.role_id ?? "").then((res) => res.data),
  //   {
  //     enabled: user?.role === "doctor",
  //   },
  // );

  // const { data: patientData } = useQuery(
  //   ["getPatientDataById"],
  //   () =>
  //     otherApi.getDoctorPatientId(user?.role_id ?? "").then((res) => res.data),
  //   {
  //     enabled: user?.role === "patient",
  //   },
  // );

  return (
    <div>
      <div className="text-Bold16">Ваши Личные Данные</div>
      <div className="w-full bg-white px-10 py-6 mt-6 rounded-xl">
        {InputsData.map(({ placeholder, title }) => (
          <div
            className="flex items-center justify-between max-w-[550px] mt-3"
            key={title}
          >
            <div className="text-Bold16">{title}</div>
            <Input
              wrapperClassName="w-fit"
              className="w-80"
              placeholder={placeholder}
            />
          </div>
        ))}
        <div className="flex items-center justify-between max-w-[550px] mt-3">
          <div className="text-Bold16">НОМЕР ТЕЛЕФОНА</div>
          <InputPhone
            className="w-80"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between max-w-[550px] mt-3">
          <div className="text-Bold16">ДАТА РОЖДЕНИЯ</div>
          <DatePicker
            defaultValue={dayjs("01/01/2015", "DD/MM/YYYY")}
            format={"DD/MM/YYYY"}
            className="w-80"
          />
        </div>

        <div className="flex items-center justify-between max-w-[550px] mt-3">
          <div className="text-Bold16">СЕРТИФИКАТ</div>
          <FileUpload title="Загрузить сертификат" />
        </div>
        <div className="flex items-center justify-between max-w-[550px] mt-3">
          <div className="text-Bold16">ЛИЦЕНЗИЯ</div>
          <FileUpload title="Загрузить лицензию" />
        </div>
        <div className="flex justify-center mt-10">
          <Button className="py-1">СОХРАНИТЬ</Button>
        </div>
      </div>
    </div>
  );
};
