import type { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import type { TypeSetState } from "@/shared/utils/types";
import type { Landmark } from "@mediapipe/tasks-vision";

export interface ExerciseProps {
  landmarksList: BodyPartLists[];
  repeatTarget: number;
  poseCheckCondition: boolean;
  bodyAngle: number;
  landmarks?: Landmark[];
  setFinish?: TypeSetState<boolean>;
  addResult: (maxBodyAngle: number) => void;
  right?: boolean;
  img: string;
  imgHeight?: string;
  videoModel: string;
  results?: number[];
  exerciseCycleCondition: boolean[];
  exercisePlayCondition: boolean;
  test?: { el: boolean; key: number }[];
  percent?: number;
}
