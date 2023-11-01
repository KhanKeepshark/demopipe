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
      duration,
      placement: "bottomLeft",
    });
  };

  useEffect(() => {
    openNotification();
  }, []);

  return <>{contextHolder}</>;
};
