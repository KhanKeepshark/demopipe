import { FC, useEffect, useRef } from "react";
import { VideoModelProps } from "../models/videoModelProps";
import clsx from "clsx";
import { IoChevronDownCircle, IoCloseCircle } from "react-icons/io5";

export const VideoModel: FC<VideoModelProps> = ({
  play,
  seconds,
  src,
  mirrored,
  poseCheck,
}) => {
  const videoModel = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoModel.current) {
      if (play && seconds === 0) {
        videoModel.current.play();
      } else {
        videoModel.current.pause();
      }
    }
  }, [play, seconds]);

  const Component = poseCheck ? IoChevronDownCircle : IoCloseCircle;

  return (
    <div className="absolute w-80 top-0 -right-0 max-[1090px]:w-48 max-[1090px]:top-10 max-[1090px]:-right-10 transform max-[1090px]:rotate-90">
      <Component
        className="absolute top-0 right-0 z-10"
        size={50}
        color={poseCheck ? "green" : "red"}
      />
      <video
        ref={videoModel}
        loop
        className={clsx({
          "transform scale-x-[-1]": mirrored,
        })}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
