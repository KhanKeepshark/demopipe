import type { FC, ReactElement } from "react";
import { useCallback, useContext, useMemo } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "@/shared/contexts";

const { Sider } = Layout;

const SidebarNavs = [
  {
    title: "ЛИЧНЫЕ ДАННЫЕ",
    link: "/account",
  },
  {
    title: "ПАЦИЕНТЫ",
    link: "/patients",
  },
  {
    title: "БИБЛИОТЕКА УПРАЖНЕНИИ",
    link: "/exercises",
  },
];

export const Sidebar: FC<{ children: ReactElement }> = ({ children }) => {
  const { pathname } = useLocation();
  const { setUser, setAuthToken, user } = useContext(UserContext);
  const navigate = useNavigate();

  const MenuItems = useMemo(
    () =>
      SidebarNavs.map((nav) => ({
        key: nav.link,
        label: <div className="text-xs">{nav.title}</div>,
        onClick: () => navigate(nav.link),
      })),
    [],
  );

  const logOut = useCallback(() => {
    setUser(null), setAuthToken(null), navigate("/authorization");
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sider trigger={null} width={224}>
        <div className="p-5 flex gap-4">
          <Avatar icon={<UserOutlined />} size={54} className="bg-gray" />
          <div className="mt-1 text-sm">
            Андрей
            <div>{user?.role === "doctor" ? "Врач" : "Пациент"}</div>
          </div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            ...MenuItems,
            {
              key: "exit",
              label: <div className="text-xs">ВЫЙТИ ИЗ СИСТЕМЫ</div>,
              onClick: () => logOut(),
            },
          ]}
        />
      </Sider>
      <div className="w-full bg-brand-aquaLigt p-6">{children}</div>
    </div>
  );
};
