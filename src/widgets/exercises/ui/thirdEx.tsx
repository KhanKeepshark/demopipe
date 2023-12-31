import type { FC } from "react";
import { useCallback, useContext, useMemo, useState } from "react";
import type { OrderExerciseProps } from "../models/ExerciseModels";
import { Exercise } from "@/entities/exercise";
import type { Landmark } from "@mediapipe/tasks-vision";
import type { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import { ExerciseContext } from "@/shared/contexts/exerciseContext";
import { ThirdExModel, ThirdExVideo } from "@/shared/assets";
import { repeatTarget } from "@/shared/utils/const/const";

export const ThirdEx: FC<OrderExerciseProps> = ({ setResults, setFinish }) => {
  const [finishLeg, setFinishLeg] = useState(false);
  const [landmarks, setLandmarks] = useState<Landmark[]>();
  const [bodyAngle, setBodyAngle] = useState(0);
  const { isMobile } = useContext(ExerciseContext);
  const [percent, setPercent] = useState(0);

  // left
  const leftBodyPartLists: BodyPartLists[] = useMemo(
    () => [
      {
        point1: 7,
        point2: 23,
        point3: 29,
        setAngle: setBodyAngle,
        maxValue: 100,
        minValue: 180,
        setPercent: setPercent,
        getlandmarks: {
          landmarks: [23, 29],
          setLandmarks,
        },
        invisible: true,
      },
    ],
    [],
  );

  const addResult = useCallback(
    (maxBodyAngle: number) =>
      setResults?.((prev) => [...prev, 180 - maxBodyAngle]),
    [setResults],
  );

  const leftPoseCheckCondition = useMemo(() => {
    if (
      landmarks &&
      landmarks?.[0].y > 0.4 &&
      landmarks?.[0].y < 0.65 &&
      landmarks?.[1].y > 0.6 &&
      landmarks?.[1].x < 1 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x > 0.4 &&
      landmarks?.[0].x < 0.55 &&
      landmarks?.[1].x < 0.3 &&
      landmarks?.[1].y < 1
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, isMobile]);

  // right
  const rightBodyPartLists: BodyPartLists[] = useMemo(
    () => [
      {
        point1: 8,
        point2: 24,
        point3: 30,
        setAngle: setBodyAngle,
        getlandmarks: {
          landmarks: [24, 30],
          setLandmarks,
        },
        maxValue: 100,
        minValue: 180,
        setPercent: setPercent,
      },
    ],
    [],
  );

  const rightPoseCheckCondition = useMemo(() => {
    if (
      landmarks &&
      landmarks?.[0].y > 0.4 &&
      landmarks?.[0].y < 0.65 &&
      landmarks?.[1].y < 0.4 &&
      landmarks?.[1].x < 1 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x > 0.4 &&
      landmarks?.[0].x < 0.55 &&
      landmarks?.[1].y < 1 &&
      landmarks?.[1].x > 0.7
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, isMobile]);

  // all
  const exerciseCycleCondition = useMemo(
    () => [bodyAngle < 70, bodyAngle > 90],
    [bodyAngle],
  );

  const exercisePlayCondition = useMemo(() => {
    return bodyAngle > 70 && bodyAngle < 100;
  }, [bodyAngle]);

  return finishLeg ? (
    <Exercise
      key="right"
      setFinish={setFinish}
      repeatTarget={repeatTarget}
      landmarks={landmarks}
      addResult={addResult}
      bodyAngle={bodyAngle}
      landmarksList={rightBodyPartLists}
      poseCheckCondition={rightPoseCheckCondition}
      img={ThirdExModel}
      videoModel={ThirdExVideo}
      imgHeight="top-[130px]"
      right
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
      percent={percent}
    />
  ) : (
    <Exercise
      key="left"
      setFinish={setFinishLeg}
      repeatTarget={repeatTarget}
      landmarks={landmarks}
      addResult={addResult}
      bodyAngle={bodyAngle}
      landmarksList={leftBodyPartLists}
      poseCheckCondition={leftPoseCheckCondition}
      img={ThirdExModel}
      imgHeight="top-[130px]"
      videoModel={ThirdExVideo}
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
      percent={percent}
    />
  );
};
