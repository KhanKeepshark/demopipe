import { Carousel as AntCarousel } from "antd";
import { FC } from "react";
import { CarouselModel } from "./props";

export const Carousel: FC<CarouselModel> = ({ children }) => {
  return (
    <AntCarousel effect="fade" autoplay>
      {children}
    </AntCarousel>
  );
};
