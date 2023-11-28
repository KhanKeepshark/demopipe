import { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import { TypeSetState } from "@/shared/utils/types";
import { Landmark } from "@mediapipe/tasks-vision";

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
  videoModel: string;
  results?: number[];
}
