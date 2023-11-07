import {
  DrawingUtils,
  Landmark,
  PoseLandmarker,
} from "@mediapipe/tasks-vision";
import { EnableCamModel, PredictWebcamModel } from "./types";

let lastVideoTime = -1;

export const enableCam = ({
  videoRef,
  canvasElementRef,
  play,
  bodyPartLists,
  poseLandmarkerRef,
}: EnableCamModel) => {
  if (!poseLandmarkerRef.current) {
    console.log("Wait! poseLandmarker not loaded yet.");
    return;
  }
  const constraints = { video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      if (videoRef.current !== null) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener(
          "loadeddata",
          predictWebcam({
            videoRef,
            canvasElementRef,
            play,
            bodyPartLists,
            poseLandmarkerRef,
          }),
        );
      }
    })
    .catch((error) => {
      console.error("Error accessing webcam:", error);
    });
};

const predictWebcam = ({
  videoRef,
  canvasElementRef,
  play,
  bodyPartLists,
  poseLandmarkerRef,
}: PredictWebcamModel) => {
  return () => {
    if (videoRef.current === null || canvasElementRef.current === null) {
      return;
    }
    const startTimeMs = performance.now();
    if (lastVideoTime !== videoRef.current.currentTime) {
      lastVideoTime = videoRef.current.currentTime;
      poseLandmarkerRef.current.detectForVideo(
        videoRef.current,
        startTimeMs,
        (result: any) => {
          const canvasCtx = canvasElementRef.current!.getContext("2d");
          const drawingUtils = new DrawingUtils(canvasCtx!);

          const { videoWidth, videoHeight } = videoRef.current!;
          canvasElementRef.current!.width = videoWidth;
          canvasElementRef.current!.height = videoHeight;

          canvasCtx!.save();
          canvasCtx!.clearRect(0, 0, videoWidth, videoHeight);
          for (const landmark of result.landmarks) {
            drawingUtils.drawLandmarks(landmark, {
              color: "orange",
              radius: (data) =>
                DrawingUtils.lerp(data.from?.z as number, -0.15, 0.1, 5, 1),
            });
            drawingUtils.drawConnectors(
              landmark,
              PoseLandmarker.POSE_CONNECTIONS,
              { color: "white" },
            );
            bodyPartLists?.map((bodyPart) => {
              if (!bodyPart.invisible) {
                drawingUtils.drawLandmarks(
                  [
                    landmark[bodyPart.point1],
                    landmark[bodyPart.point2],
                    landmark[bodyPart.point3],
                  ],
                  {
                    color: "blue",
                    radius: (data) =>
                      DrawingUtils.lerp(
                        data.from?.z as number,
                        -0.15,
                        0.1,
                        5,
                        1,
                      ),
                  },
                );
                drawingUtils.drawConnectors(
                  [
                    landmark[bodyPart.point1],
                    landmark[bodyPart.point2],
                    landmark[bodyPart.point3],
                  ],
                  PoseLandmarker.POSE_CONNECTIONS,
                  { color: "red" },
                );
              }
              bodyPart.setPercent?.(
                calculatePercent(
                  landmark[bodyPart.point1],
                  landmark[bodyPart.point2],
                  landmark[bodyPart.point3],
                  //@ts-ignore
                  bodyPart.maxValue,
                  bodyPart.minValue,
                ),
              );
              bodyPart.setAngle?.(
                calculateAngle(
                  landmark[bodyPart.point1],
                  landmark[bodyPart.point2],
                  landmark[bodyPart.point3],
                ),
              );
              if (bodyPart.getlandmarks) {
                const landmarkList: Landmark[] = [];
                bodyPart.getlandmarks?.landmarks.map((landmarkNumber) =>
                  landmarkList.push(landmark[landmarkNumber]),
                );
                bodyPart.getlandmarks.setLandmarks?.(landmarkList);
              }
            });
          }
          canvasCtx!.restore();
        },
      );
    }
    window.requestAnimationFrame(
      predictWebcam({
        videoRef,
        canvasElementRef,
        play,
        bodyPartLists,
        poseLandmarkerRef,
      }),
    );
  };
};

const calculatePercent = (
  shoulderPoint: { x: number; y: number },
  elbowPoint: { x: number; y: number },
  wristPoint: { x: number; y: number },
  maxValue: number,
  minValue: number,
) => {
  return Math.trunc(
    Math.abs(
      minValue - calculateAngle(shoulderPoint, elbowPoint, wristPoint)!,
    ) /
      (Math.abs(maxValue - minValue) / 100),
  );
};

const calculateAngle = (
  shoulderPoint: { x: number; y: number },
  elbowPoint: { x: number; y: number },
  wristPoint: { x: number; y: number },
) => {
  const vectorEW = {
    x: wristPoint.x - elbowPoint.x,
    y: wristPoint.y - elbowPoint.y,
  };
  const vectorES = {
    x: shoulderPoint.x - elbowPoint.x,
    y: shoulderPoint.y - elbowPoint.y,
  };

  const dotProduct = vectorEW.x * vectorES.x + vectorEW.y * vectorES.y;
  const magnitudeEW = Math.sqrt(vectorEW.x ** 2 + vectorEW.y ** 2);
  const magnitudeES = Math.sqrt(vectorES.x ** 2 + vectorES.y ** 2);

  const cosAngle = dotProduct / (magnitudeEW * magnitudeES);

  const angleRadians = Math.acos(cosAngle);
  const angleDegrees = (angleRadians * 180) / Math.PI;

  return angleDegrees;
};
