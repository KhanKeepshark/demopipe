import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { MainLayout } from "@/shared/layout";
import { FourthEx, FirstEx, ThirdEx, SecondEx } from "@/widgets/exercises";
import { AuthWidget } from "@/widgets/auth";

export enum AppRoutes {
  Exercise1 = "Exercise1",
  Exercise2 = "Exercise2",
  Exercise3 = "Exercise3",
  Exercise4 = "Exercise4",
  MAINPAGE = "mainPage",
  AUTH = "auth",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Exercise1]: "/Exercise1",
  [AppRoutes.Exercise2]: "/Exercise2",
  [AppRoutes.Exercise3]: "/Exercise3",
  [AppRoutes.Exercise4]: "/Exercise4",
  [AppRoutes.MAINPAGE]: "/",
  [AppRoutes.AUTH]: "/auth",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Exercise1]: {
    path: RoutePath.Exercise1,
    element: <FirstEx />,
  },

  [AppRoutes.Exercise2]: {
    path: RoutePath.Exercise2,
    element: <SecondEx />,
  },

  [AppRoutes.Exercise3]: {
    path: RoutePath.Exercise3,
    element: <ThirdEx />,
  },

  [AppRoutes.Exercise4]: {
    path: RoutePath.Exercise4,
    element: <FourthEx />,
  },

  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthWidget />,
  },

  [AppRoutes.MAINPAGE]: {
    path: RoutePath.mainPage,
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
};
