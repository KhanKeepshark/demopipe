import { Progress } from "antd";
import type { FC } from "react";
import { useEffect } from "react";
import type { ProgressBarProps } from "../models/ProgressBarProps";

export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  play,
  percent,
  title,
}) => {
  useEffect(() => {});
  return (
    <div className={className}>
      <div className="font-bold text-blue-100">{title}</div>
      <Progress
        strokeLinecap="butt"
        percent={play ? percent : 0}
        size={[300, 20]}
      />
    </div>
  );
};
