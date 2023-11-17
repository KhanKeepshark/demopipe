import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { ReverseLegBending } from "@/widgets/reverseLegBending";
import { LyingLegLifting } from "@/widgets/lyingLegLifting";

export enum AppRoutes {
  MAIN = "main",
  LyingLegLiftingLeft = "testOne",
  ReverseLegBending = "testTwo",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LyingLegLiftingLeft]: "/testOne",
  [AppRoutes.ReverseLegBending]: "/testTwo",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRoutes.LyingLegLiftingLeft]: {
    path: RoutePath.testOne,
    element: <LyingLegLifting />,
  },

  [AppRoutes.ReverseLegBending]: {
    path: RoutePath.testTwo,
    element: <ReverseLegBending />,
  },
};
