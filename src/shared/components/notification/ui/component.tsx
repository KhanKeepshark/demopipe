import { FC, useEffect } from "react";
import { notification } from "antd";
import { NotificationProps } from "../model/NotificationProps";

export const Notification: FC<NotificationProps> = ({
  title,
  description,
  duration,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: title,
      description,
      duration: 9000,
      placement: "bottomLeft",
      className: "max-[1090px]:hidden ",
    });
  };

  useEffect(() => {
    openNotification();
  }, []);

  return <>{contextHolder}</>;
};
