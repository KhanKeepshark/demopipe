import { enableCam } from "@/shared/utils/mediaPipeDraw";
import {
  FilesetResolver,
  Landmark,
  PoseLandmarker,
} from "@mediapipe/tasks-vision";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Timer,
  ExerciseOneControlBlock,
  Notification,
  VideoModel,
} from "@/shared/components";
import { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import testTwoVideo from "@/shared/assets/testTwo.mp4";
import { ReverseLegBendingLeftProps } from "../models/ReverseLegBending";

const repeatTarget = 3;

export const ReverseLegBendingLeft: FC<ReverseLegBendingLeftProps> = ({
  setFinish,
  setResults,
}) => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [play, setPlay] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [firstOn, setFirstOn] = useState(false);
  const [bodyAngle, setBodyAngle] = useState(0);
  const [checkLegAngle, setCheckLegAngle] = useState(0);
  const [exerciseCount, setExerciseCount] = useState(0);
  const poseLandmarkerRef = useRef<any | null>(null);
  const [exerciseСycle, setExerciseСycle] = useState(false);
  const [landmarks, setLandmarks] = useState<Landmark[]>();
  const [poseCheck, setPoseCheck] = useState(false);

  // max values
  const [maxBodyAngle, setMaxBodyAngle] = useState(180);

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
        // invisible: true,
      },
    ],
    [],
  );

  //   exercise leg count and exercise finish
  useEffect(() => {
    if (play && exerciseCount !== repeatTarget && poseCheck) {
      if (checkLegAngle < 110) {
        setExerciseСycle((prev) => (prev = true));
        if (checkLegAngle < maxBodyAngle) {
          setMaxBodyAngle((prev) => (prev = checkLegAngle));
        }
      } else if (checkLegAngle > 150 && exerciseСycle) {
        setExerciseCount((prev) => prev + 1);
        setExerciseСycle((prev) => (prev = false));
        setResults((prev) => [...prev, 180 - maxBodyAngle]);
        setMaxBodyAngle((prev) => (prev = 180));
      }
    } else if (exerciseCount === repeatTarget) {
      setFinish(true);
    }
  }, [play, exerciseCount, checkLegAngle]);

  // turn on mediaPipe
  useEffect(() => {
    const createPoseLandmarker = async () => {
      console.log("Creating PoseLandmarker...");
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm",
      );
      poseLandmarkerRef.current = await PoseLandmarker.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
        },
      );
      console.log("PoseLandmarker created successfully!");
      enableCam({
        videoRef,
        canvasElementRef,
        play,
        bodyPartLists: leftBodyPartLists,
        poseLandmarkerRef,
      });
    };
    createPoseLandmarker();
  }, []);

  // turn on exercise
  const playVideo = useCallback(() => {
    setPlay(true);
    if (seconds === 0) {
      setSeconds(3);
    }
  }, []);

  useEffect(() => {
    if (bodyAngle > 150 && !play && landmarks) {
      if (poseCheck && !firstOn) {
        playVideo();
      }
    }
  }, [bodyAngle, landmarks]);

  useEffect(() => {
    if (seconds === 0) {
      if (firstOn) {
        return;
      }
      enableCam({
        videoRef,
        canvasElementRef,
        play,
        bodyPartLists: leftBodyPartLists,
        poseLandmarkerRef,
      });
      setFirstOn((prev) => prev === true);
    }
  }, [seconds === 0]);

  // check head position
  useEffect(() => {
    if (
      landmarks &&
      landmarks?.[0].x < 0.3 &&
      landmarks?.[0].y > 0.7 &&
      landmarks?.[1].y < 1 &&
      bodyAngle > 150
    ) {
      setPoseCheck((prev) => (prev = true));
    } else {
      setPoseCheck((prev) => (prev = false));
    }
  }, [landmarks]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className="relative">
        <video id="webcam" ref={videoRef} autoPlay className="w-[1000px]" />
        <canvas
          id="output_canvas"
          ref={canvasElementRef}
          className="absolute top-0 left-0 w-[1000px]"
        />
        <Notification
          title="Подсказка"
          description="Для начала работы программы примите позу как на 3d модели сверху, вдоль фиолетовой линии"
          duration={10}
        />
        {seconds > 0 && play && (
          <Timer seconds={seconds} setSeconds={setSeconds} play={play} />
        )}
        <VideoModel
          poseCheck={poseCheck}
          src={testTwoVideo}
          seconds={seconds}
          play={play}
        />
        <div className="absolute h-1 w-full bg-indigo-500 bottom-20" />
        <ExerciseOneControlBlock
          exerciseCount={exerciseCount}
          repeatTarget={repeatTarget}
          play={play}
          setPlay={setPlay}
        />
      </div>
    </div>
  );
};