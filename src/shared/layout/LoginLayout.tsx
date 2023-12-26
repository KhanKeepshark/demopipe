import { Sidebar } from "@/widgets/sidebar";
import { FC, ReactElement } from "react";

export const LoginLayout: FC<{
  children: ReactElement;
}> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>;
};
