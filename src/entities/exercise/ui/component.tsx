import { enableCam } from "@/shared/utils/mediaPipeDraw";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Timer,
  ExerciseOneControlBlock,
  Notification,
  VideoModel,
  PurpleLine,
} from "@/shared/components";
import { ExerciseContext } from "@/shared/contexts/exerciseContext";
import { ExerciseProps } from "../models/ExerciseProps";
import clsx from "clsx";
import { ExerciseEnd } from "@/entities/exerciseEnd";

export const Exercise: FC<ExerciseProps> = ({
  landmarksList,
  repeatTarget,
  poseCheckCondition,
  bodyAngle,
  landmarks,
  setFinish,
  addResult,
  img,
  videoModel,
  right = false,
  results,
  exerciseCycleCondition,
  exercisePlayCondition,
  imgHeight,
}) => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { isMobile } = useContext(ExerciseContext);

  const [play, setPlay] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [firstOn, setFirstOn] = useState(false);
  const [exerciseCount, setExerciseCount] = useState(0);
  const poseLandmarkerRef = useRef<any | null>(null);
  const [exerciseСycle, setExerciseСycle] = useState(false);
  const [poseCheck, setPoseCheck] = useState(false);

  // max values
  const [maxBodyAngle, setMaxBodyAngle] = useState(180);

  // exercise leg count and exercise finish
  useEffect(() => {
    if (play && exerciseCount !== repeatTarget && poseCheck) {
      if (exerciseCycleCondition[0]) {
        setExerciseСycle((prev) => (prev = true));
        if (bodyAngle < maxBodyAngle) {
          setMaxBodyAngle((prev) => (prev = bodyAngle));
        }
      } else if (exerciseCycleCondition[1] && exerciseСycle) {
        setExerciseCount((prev) => prev + 1);
        setExerciseСycle((prev) => (prev = false));
        addResult(maxBodyAngle);
        setMaxBodyAngle((prev) => (prev = 180));
      }
    } else if (exerciseCount === repeatTarget) {
      setFinish?.(true);
      setPlay(false);
    }
  }, [play, exerciseCount, bodyAngle, exerciseCycleCondition]);

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
        bodyPartLists: landmarksList,
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
    if (exercisePlayCondition && !play && landmarks) {
      if (poseCheck && !firstOn) {
        playVideo();
      }
    }
  }, [exercisePlayCondition, landmarks]);

  useEffect(() => {
    if (seconds === 0) {
      if (firstOn) {
        return;
      }
      enableCam({
        videoRef,
        canvasElementRef,
        play,
        bodyPartLists: landmarksList,
        poseLandmarkerRef,
      });
      setFirstOn((prev) => prev === true);
    }
  }, [seconds === 0]);

  // check head position
  useEffect(() => {
    if (isMobile) {
      if (poseCheckCondition) {
        setPoseCheck((prev) => (prev = true));
      } else {
        setPoseCheck((prev) => (prev = false));
      }
    } else {
      if (poseCheckCondition) {
        setPoseCheck((prev) => (prev = true));
      } else {
        setPoseCheck((prev) => (prev = false));
      }
    }
  }, [landmarks]);

  const mirrorComponents = useMemo(
    () => (isMobile ? !right : right),
    [isMobile, right],
  );

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className="relative overflow-hidden">
        <video
          id="webcam"
          ref={videoRef}
          autoPlay
          className="w-[1000px] transform max-[1090px]:scale-x-[-1]"
        />
        <canvas
          id="output_canvas"
          ref={canvasElementRef}
          className="absolute top-0 left-0 w-[1000px] max-[1090px]:w-full transform max-[1090px]:scale-x-[-1]"
        />
        <VideoModel
          poseCheck={poseCheck}
          src={videoModel}
          seconds={seconds}
          play={play}
          mirrored={mirrorComponents}
        />
        {results?.length === 12 && (
          <ExerciseEnd isMobile={isMobile} angles={results} />
        )}
        <Notification
          title="Подсказка"
          description="Для начала работы программы примите позу как на 3d модели сверху, вдоль фиолетовой линии"
          duration={10}
        />
        <img
          className={clsx(
            "absolute w-[1300px] opacity-50 max-[1090px]:-right-[15%] max-w-[2000px] transform max-[1090px]:w-[160%] max-[1090px]:top-40 max-[1090px]:rotate-90",
            imgHeight,
            {
              "transform scale-x-[-1] -right-44": mirrorComponents,
              "-right-28": !mirrorComponents,
              "top-[270px]": !imgHeight,
            },
          )}
          src={img}
          alt=""
        />
        {seconds > 0 && play && (
          <Timer seconds={seconds} setSeconds={setSeconds} play={play} />
        )}
        <PurpleLine />
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
