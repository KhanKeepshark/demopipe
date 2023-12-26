import { FC, ReactElement, createContext, useMemo, useState } from "react";
import { TypeSetState } from "../utils/types";

interface ExerciseContextType {
  exerciseOrder: number[];
  setExerciseOrder: TypeSetState<number[]>;
  isMobile: boolean;
}

export const ExerciseContext = createContext<ExerciseContextType>({
  exerciseOrder: [1, 2, 3],
  setExerciseOrder: () => {},
  isMobile: false,
});

export const ExerciseContextProvider: FC<{ children: ReactElement }> = (
  props,
) => {
  const [exerciseOrder, setExerciseOrder] = useState<number[]>([1, 2, 3]);
  const isMobile = window.screen.width < 640;

  const exerciseContext = useMemo(
    () => ({ exerciseOrder, setExerciseOrder, isMobile }),
    [exerciseOrder, setExerciseOrder, isMobile],
  );

  return (
    <ExerciseContext.Provider value={exerciseContext}>
      {props.children}
    </ExerciseContext.Provider>
  );
};
