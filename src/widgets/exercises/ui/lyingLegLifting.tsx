import { FC, useCallback, useContext, useMemo, useState } from "react";
import { OrderExerciseProps } from "../models/ExerciseModels";
import { Exercise } from "@/entities/exercise";
import { Landmark } from "@mediapipe/tasks-vision";
import { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import { ExerciseContext } from "@/shared/contexts/exerciseContext";
import { FirstExModel, testOneVideo } from "@/shared/assets";
import { repeatTarget } from "@/shared/utils/const/const";

export const LyingLegLifting: FC<OrderExerciseProps> = ({
  setResults,
  setFinish,
}) => {
  const [finishLeg, setFinishLeg] = useState(false);
  const [landmarks, setLandmarks] = useState<Landmark[]>();
  const [bodyAngle, setBodyAngle] = useState(0);
  const [checkLegAngle, setCheckLegAngle] = useState(0);
  const { isMobile } = useContext(ExerciseContext);

  // left
  const leftBodyPartLists: BodyPartLists[] = useMemo(
    () => [
      {
        point1: 7,
        point2: 23,
        point3: 29,
        setAngle: setBodyAngle,
        getlandmarks: {
          landmarks: [0, 29],
          setLandmarks,
        },
        invisible: true,
      },
      {
        point1: 23,
        point2: 25,
        point3: 27,
        setAngle: setCheckLegAngle,
        invisible: true,
      },
      {
        point1: 11,
        point2: 23,
        point3: 29,
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
      landmarks?.[0].x > 0.7 &&
      landmarks?.[0].y < 0.4 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 165 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x > 0.7 &&
      landmarks?.[0].y > 0.6 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 165
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, checkLegAngle, isMobile]);

  // right
  const rightBodyPartLists: BodyPartLists[] = useMemo(
    () => [
      {
        point1: 8,
        point2: 24,
        point3: 30,
        setAngle: setBodyAngle,
        getlandmarks: {
          landmarks: [0, 30],
          setLandmarks,
        },
      },
      {
        point1: 24,
        point2: 26,
        point3: 28,
        setAngle: setCheckLegAngle,
        invisible: true,
      },
      {
        point1: 12,
        point2: 24,
        point3: 30,
      },
    ],
    [],
  );

  const rightPoseCheckCondition = useMemo(() => {
    if (
      landmarks &&
      landmarks?.[0].x > 0.7 &&
      landmarks?.[0].y > 0.7 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 165 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x < 0.3 &&
      landmarks?.[0].y > 0.7 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 165
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, checkLegAngle, isMobile]);

  // all
  const exerciseCycleCondition = useMemo(
    () => [bodyAngle < 165, bodyAngle > 177],
    [bodyAngle],
  );

  const exercisePlayCondition = useMemo(() => {
    const bodyAngleCondition = isMobile ? 170 : 178;
    return bodyAngle > bodyAngleCondition;
  }, [bodyAngle, isMobile]);

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
      img={FirstExModel}
      videoModel={testOneVideo}
      right
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
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
      img={FirstExModel}
      videoModel={testOneVideo}
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
    />
  );
};
