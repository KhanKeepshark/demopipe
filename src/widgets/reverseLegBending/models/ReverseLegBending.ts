import { TypeSetState } from "@/shared/utils/types";

export interface ReverseLegBendingProps {
  setResults: TypeSetState<number[]>;
  results: number[];
}

export interface ReverseLegBendingLeftProps {
  setFinish: TypeSetState<boolean>;
  setResults: TypeSetState<number[]>;
}

export interface ReverseLegBendingRightProps {
  setResults: TypeSetState<number[]>;
  results: number[];
}
