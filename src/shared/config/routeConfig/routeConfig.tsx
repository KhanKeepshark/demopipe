import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  // LyingLegLiftingLeft = "testOne",
  // ReverseLegBending = "testTwo",
  TEST = "test",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  // [AppRoutes.LyingLegLiftingLeft]: "/testOne",
  // [AppRoutes.ReverseLegBending]: "/testTwo",
  [AppRoutes.TEST]: "/test",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  // [AppRoutes.LyingLegLiftingLeft]: {
  //   path: RoutePath.testOne,
  //   element: <LyingLegLifting />,
  // },

  // [AppRoutes.ReverseLegBending]: {
  //   path: RoutePath.testTwo,
  //   element: <ReverseLegBending />,
  // },

  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <MainPage />,
  },
};
