import { FC, useCallback, useContext, useMemo, useState } from "react";
import { LastExerciseProps } from "../models/ExerciseModels";
import { Exercise } from "@/entities/exercise";
import { ExerciseContext } from "@/shared/contexts/exerciseContext";
import { Landmark } from "@mediapipe/tasks-vision";
import { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import { Test2Model, testTwoVideo } from "@/shared/assets";

export const ReverseLegBending: FC<LastExerciseProps> = ({
  setResults,
  results,
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
        point3: 25,
        setAngle: setBodyAngle,
        getlandmarks: {
          landmarks: [0, 30],
          setLandmarks,
        },
        invisible: true,
      },
      {
        point1: 23,
        point2: 25,
        point3: 27,
        setAngle: setCheckLegAngle,
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
      landmarks?.[0].x > 0.6 &&
      landmarks?.[0].y > 0.5 &&
      landmarks?.[1].y < 1 &&
      bodyAngle > 150 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x < 0.3 &&
      landmarks?.[0].y > 0.6 &&
      landmarks?.[1].y < 1 &&
      bodyAngle > 150
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
        point3: 26,
        setAngle: setBodyAngle,
        getlandmarks: {
          landmarks: [0, 30],
          setLandmarks,
        },
        invisible: true,
      },
      {
        point1: 24,
        point2: 26,
        point3: 28,
        setAngle: setCheckLegAngle,
      },
    ],
    [],
  );

  const rightPoseCheckCondition = useMemo(() => {
    if (
      landmarks &&
      landmarks?.[0].x > 0.6 &&
      landmarks?.[0].y < 0.5 &&
      landmarks?.[1].y < 1 &&
      bodyAngle > 150 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x > 0.7 &&
      landmarks?.[0].y > 0.6 &&
      landmarks?.[1].y < 1 &&
      bodyAngle > 150
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, checkLegAngle, isMobile]);

  // all
  const exerciseCycleCondition = useMemo(
    () => [checkLegAngle < 110, checkLegAngle > 150],
    [checkLegAngle],
  );

  const exercisePlayCondition = useMemo(() => {
    const bodyAngleCondition = isMobile ? 140 : 150;
    return bodyAngle > bodyAngleCondition;
  }, [bodyAngle, isMobile]);

  return finishLeg ? (
    <Exercise
      key="right"
      repeatTarget={3}
      landmarks={landmarks}
      addResult={addResult}
      bodyAngle={bodyAngle}
      landmarksList={rightBodyPartLists}
      poseCheckCondition={rightPoseCheckCondition}
      img={Test2Model}
      videoModel={testTwoVideo}
      results={results}
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
      right
    />
  ) : (
    <Exercise
      key="left"
      setFinish={setFinishLeg}
      repeatTarget={3}
      landmarks={landmarks}
      addResult={addResult}
      bodyAngle={bodyAngle}
      landmarksList={leftBodyPartLists}
      poseCheckCondition={leftPoseCheckCondition}
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
      img={Test2Model}
      videoModel={testTwoVideo}
    />
  );
};
