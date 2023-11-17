import { FC, ReactElement, createContext, useMemo, useState } from "react";
import { TypeSetState } from "../utils/types";

interface ExerciseContextType {
  exerciseOrder: number[];
  setExerciseOrder: TypeSetState<number[]>;
}

export const ExerciseContext = createContext<ExerciseContextType>({
  exerciseOrder: [1, 2, 3],
  setExerciseOrder: () => {},
});

export const ExerciseContextProvider: FC<{ children: ReactElement }> = (
  props,
) => {
  const [exerciseOrder, setExerciseOrder] = useState<number[]>([1, 2, 3]);

  const exerciseContext = useMemo(
    () => ({ exerciseOrder, setExerciseOrder }),
    [exerciseOrder, setExerciseOrder],
  );

  return (
    <ExerciseContext.Provider value={exerciseContext}>
      {props.children}
    </ExerciseContext.Provider>
  );
};
