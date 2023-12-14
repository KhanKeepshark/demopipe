import { RouteProps } from "react-router-dom";
import { MainPage, Confidential } from "@/pages";
import { MainLayout } from "@/shared/layout";
import { FourthEx, FirstEx, ThirdEx, SecondEx } from "@/widgets/exercises";
import { AuthWidget } from "@/widgets/auth";
import { Useragreement } from "@/pages/Useragreement/Useragreement";

export enum AppRoutes {
  // Exercise
  Exercise1 = "Exercise1",
  Exercise2 = "Exercise2",
  Exercise3 = "Exercise3",
  Exercise4 = "Exercise4",
  // Main
  MAINPAGE = "mainPage",
  // Auth
  AUTH = "auth",
  Confidential = "confidential",
  Useragreement = "useragreement",
}

export const RoutePath: Record<AppRoutes, string> = {
  // Exercise
  [AppRoutes.Exercise1]: "/Exercise1",
  [AppRoutes.Exercise2]: "/Exercise2",
  [AppRoutes.Exercise3]: "/Exercise3",
  [AppRoutes.Exercise4]: "/Exercise4",
  // Main
  [AppRoutes.MAINPAGE]: "/",
  // Auth
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.Confidential]: "/confidential",
  [AppRoutes.Useragreement]: "/useragreement",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  // Exercise
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

  // Auth
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthWidget />,
  },

  [AppRoutes.Confidential]: {
    path: RoutePath.confidential,
    element: <Confidential />,
  },

  [AppRoutes.Useragreement]: {
    path: RoutePath.useragreement,
    element: <Useragreement />,
  },

  // Main
  [AppRoutes.MAINPAGE]: {
    path: RoutePath.mainPage,
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
};
