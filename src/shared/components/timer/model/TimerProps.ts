import { Dispatch, SetStateAction } from "react";

export interface TimeProps {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
  play: boolean;
}
