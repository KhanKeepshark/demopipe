import { enableCam } from "@/shared/utils/mediaPipeDraw";
import {
  FilesetResolver,
  Landmark,
  PoseLandmarker,
} from "@mediapipe/tasks-vision";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Timer,
  VideoModel,
  ExerciseOneControlBlock,
  ProgressBar,
  Notification,
} from "@/shared/components";
import { BodyPartLists } from "@/shared/utils/mediaPipeDraw/types";
import nursefullHD from "@/shared/assets/nurse-full-HD.mp4";

const repeatTarget = 10;

export const RightLegExercise = () => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [play, setPlay] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [firstOn, setFirstOn] = useState(false);
  const [legPercent, setLegPercent] = useState(0);
  const [bodyAngle, setBodyAngle] = useState(0);
  const [exerciseCount, setExerciseCount] = useState(0);
  const poseLandmarkerRef = useRef<any | null>(null);
  const [poseCheck, setPoseCheck] = useState(false);
  const [landmarks, setLandmarks] = useState<Landmark[]>();
  const [exerciseСycle, setExerciseСycle] = useState(false);

  const rightBodyPartLists: BodyPartLists[] = [
    {
      point1: 24,
      point2: 26,
      point3: 28,
      maxValue: 60,
      minValue: 180,
      setPercent: setLegPercent,
    },
    {
      point1: 8,
      point2: 24,
      point3: 26,
      setAngle: setBodyAngle,
      invisible: true,
      getlandmarks: {
        landmarks: [0],
        setLandmarks,
      },
    },
  ];

  // exercise leg count and exercise finish
  useEffect(() => {
    if (play && exerciseCount !== repeatTarget && poseCheck) {
      if (legPercent > 90) {
        setExerciseСycle((cycle) => (cycle = true));
      } else if (legPercent < 10 && exerciseСycle) {
        setExerciseCount((prev) => prev + 1);
        setExerciseСycle((cycle) => (cycle = false));
      }
    } else if (exerciseCount === repeatTarget) {
      setPlay(false);
    }
  }, [play, exerciseCount, legPercent]);

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
        bodyPartLists: rightBodyPartLists,
        poseLandmarkerRef,
      });
    };
    createPoseLandmarker();
  }, []);

  const playVideo = useCallback(() => {
    setPlay(true);
    if (seconds === 0) {
      setSeconds(3);
    }
  }, []);

  useEffect(() => {
    if (bodyAngle > 178 && !play && landmarks) {
      if (poseCheck) {
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
        bodyPartLists: rightBodyPartLists,
        poseLandmarkerRef,
      });
      setFirstOn((prev) => prev === true);
    }
  }, [seconds === 0]);

  // check head position
  useEffect(() => {
    if (landmarks && landmarks?.[0].x < 0.3 && landmarks?.[0].y > 0.7) {
      setPoseCheck((pose) => (pose = true));
    } else {
      setPoseCheck((pose) => (pose = false));
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
        <VideoModel
          poseCheck={poseCheck}
          mirrored
          src={nursefullHD}
          seconds={seconds}
          play={play}
        />
        <Notification
          title="Подсказка"
          description="Для начала работы программы примите позу как на 3d модели сверху"
          duration={10}
        />
        <ProgressBar
          className="absolute left-2 p-2 top-2 bg-black bg-opacity-10 rounded-lg"
          percent={legPercent}
          play={play}
          title="Правая нога"
        />
        {seconds > 0 && play && (
          <Timer seconds={seconds} setSeconds={setSeconds} play={play} />
        )}
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
