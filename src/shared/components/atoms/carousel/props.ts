import { CarouselProps } from "antd";
import { ReactElement } from "react";

export interface CarouselModel extends CarouselProps {
  children: ReactElement[] | ReactElement;
}
