import { TypeSetState } from "@/shared/utils/types";

export interface OrderExerciseProps {
  setFinish?: TypeSetState<boolean>;
  setResults?: TypeSetState<number[]>;
}

export interface LastExerciseProps {
  setResults?: TypeSetState<number[]>;
  results?: number[];
}
