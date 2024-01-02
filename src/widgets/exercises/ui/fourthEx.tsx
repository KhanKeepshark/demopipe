//@ts-nocheck
import type { FC } from "react";
import { useCallback, useContext, useMemo, useState } from "react";
import type { OrderExerciseProps } from "../models/ExerciseModels";
import { Exercise } from "@/entities/exercise";
import type { Landmark } from "@mediapipe/tasks-vision";
import type { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import { ExerciseContext } from "@/shared/contexts/exerciseContext";
import { FourthExModel, FourthExVideo } from "@/shared/assets";
import { repeatTarget } from "@/shared/utils/const/const";

export const FourthEx: FC<OrderExerciseProps> = ({ setResults, setFinish }) => {
  const [finishLeg, setFinishLeg] = useState(false);
  const [landmarks, setLandmarks] = useState<Landmark[]>();
  const [bodyAngle, setBodyAngle] = useState(0);
  const [anotherLeg, setAnotherLeg] = useState(0);
  const [checkLegAngle, setCheckLegAngle] = useState(0);
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
        getlandmarks: {
          landmarks: [0, 29],
          setLandmarks,
        },
        invisible: true,
        maxValue: 90,
        minValue: 180,
        setPercent: setPercent,
      },
      {
        point1: 23,
        point2: 25,
        point3: 27,
        setAngle: setCheckLegAngle,
      },
      {
        point1: 24,
        point2: 26,
        point3: 28,
        setAngle: setAnotherLeg,
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
      landmarks?.[0].x > 0.6 &&
      landmarks?.[0].y < 0.4 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 145 &&
      anotherLeg < 110 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x > 0.7 &&
      landmarks?.[0].y > 0.6 &&
      landmarks?.[1].y < 1 &&
      anotherLeg < 100 &&
      checkLegAngle > 155
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
        maxValue: 90,
        minValue: 180,
        setPercent: setPercent,
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
      },
      {
        point1: 23,
        point2: 25,
        point3: 27,
        setAngle: setAnotherLeg,
        invisible: true,
      },
    ],
    [],
  );

  const rightPoseCheckCondition = useMemo(() => {
    if (
      landmarks &&
      landmarks?.[0].x > 0.6 &&
      landmarks?.[0].y > 0.7 &&
      landmarks?.[1].y < 1 &&
      checkLegAngle > 145 &&
      anotherLeg < 110 &&
      isMobile
    ) {
      return true;
    } else if (
      landmarks &&
      landmarks?.[0].x < 0.3 &&
      landmarks?.[0].y > 0.7 &&
      landmarks?.[1].y < 1 &&
      anotherLeg < 100 &&
      checkLegAngle > 155
    ) {
      return true;
    } else {
      return false;
    }
  }, [landmarks, checkLegAngle, isMobile]);

  // all
  const exerciseCycleCondition = useMemo(() => {
    const bodyAngleCondition = isMobile ? 170 : 177;
    return [bodyAngle < 165, bodyAngle > bodyAngleCondition];
  }, [bodyAngle]);

  const exercisePlayCondition = useMemo(() => {
    const bodyAngleCondition = isMobile ? 170 : 178;
    const anotherLegCondition = isMobile ? 110 : 80;
    return bodyAngle > bodyAngleCondition && anotherLeg < anotherLegCondition;
  }, [bodyAngle, isMobile, anotherLeg]);

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
      img={FourthExModel}
      videoModel={FourthExVideo}
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
      img={FourthExModel}
      videoModel={FourthExVideo}
      exerciseCycleCondition={exerciseCycleCondition}
      exercisePlayCondition={exercisePlayCondition}
      percent={percent}
    />
  );
};
