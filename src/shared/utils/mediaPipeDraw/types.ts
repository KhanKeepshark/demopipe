import { Landmark } from "@mediapipe/tasks-vision";
import { Dispatch, RefObject, SetStateAction } from "react";

export interface PredictWebcamModel {
  videoRef: RefObject<HTMLVideoElement>;
  canvasElementRef: RefObject<HTMLCanvasElement>;
  play: boolean;
  bodyPartLists?: BodyPartLists[];
  poseLandmarkerRef: any;
}

export interface EnableCamModel {
  videoRef: RefObject<HTMLVideoElement>;
  canvasElementRef: RefObject<HTMLCanvasElement>;
  firstOn?: boolean;
  play: boolean;
  bodyPartLists?: BodyPartLists[];
  poseLandmarkerRef: any;
}

export interface BodyPartLists {
  point1: number;
  point2: number;
  point3: number;
  maxValue?: number;
  minValue?: number;
  invisible?: boolean;
  setPercent?: Dispatch<SetStateAction<number>>;
  setAngle?: Dispatch<SetStateAction<number>>;
  getlandmarks?: GetLandmarks;
}

export interface GetLandmarks {
  landmarks: number[];
  setLandmarks?: Dispatch<SetStateAction<Landmark[] | undefined>>;
}

export interface calculateAngleModel {
  shoulderPoint: { x: number; y: number };
  elbowPoint: { x: number; y: number };
  wristPoint: { x: number; y: number };
}
