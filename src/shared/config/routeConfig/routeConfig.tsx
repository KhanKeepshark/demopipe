import type { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages";
import { MainLayout } from "@/shared/layout";
import { FourthEx, FirstEx, ThirdEx, SecondEx } from "@/widgets/exercises";
import { AccountPage } from "@/pages/Account";
import { LoginLayout } from "@/shared/layout/LoginLayout";
import { ExerciseByIdWidget, ExercisesWidget } from "@/widgets/accountpages";
import { authRouteConfig } from "./routes/authorization";

export enum AppRoutes {
  // Exercise
  Exercise1 = "Exercise1",
  Exercise2 = "Exercise2",
  Exercise3 = "Exercise3",
  Exercise4 = "Exercise4",
  // Main
  MAINPAGE = "mainPage",
  // Account
  Account = "account",
  Exercises = "exercises",
  ExerciseById = "exerciseById",
}

export const RoutePath: Record<AppRoutes, string> = {
  // Exercise
  [AppRoutes.Exercise1]: "/exercise/1",
  [AppRoutes.Exercise2]: "/exercise/2",
  [AppRoutes.Exercise3]: "/exercise/3",
  [AppRoutes.Exercise4]: "/exercise/4",
  // Main
  [AppRoutes.MAINPAGE]: "/",
  // Account
  [AppRoutes.Account]: "/account",
  [AppRoutes.Exercises]: "/exercises",
  [AppRoutes.ExerciseById]: "/exercises/:id",
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
  ...authRouteConfig,

  // Account
  [AppRoutes.Account]: {
    path: RoutePath.account,
    element: (
      <LoginLayout>
        <AccountPage />
      </LoginLayout>
    ),
  },

  [AppRoutes.Exercises]: {
    path: RoutePath.exercises,
    element: (
      <LoginLayout>
        <ExercisesWidget />
      </LoginLayout>
    ),
  },

  [AppRoutes.ExerciseById]: {
    path: RoutePath.exerciseById,
    element: (
      <LoginLayout>
        <ExerciseByIdWidget />
      </LoginLayout>
    ),
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
