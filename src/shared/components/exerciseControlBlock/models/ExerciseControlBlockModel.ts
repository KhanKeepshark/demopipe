import { Dispatch, SetStateAction } from "react";

export interface ExerciseOneControlBlockModel {
  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
  exerciseCount: number;
  repeatTarget: number;
}
