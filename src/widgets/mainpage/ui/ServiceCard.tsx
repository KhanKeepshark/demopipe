import { FC } from "react";
import { ServiceCardProps } from "../models/props";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

export const ServiceCard: FC<ServiceCardProps> = ({
  img,
  title,
  description,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="h-52 w-fit flex">
      <img className="w-56 h-full object-cover" src={img} alt="" />
      <div className="h-full bg-brand-aquaLigt w-72 p-6">
        <div className=" text-brand-dark text-lg font-bold">{title}</div>
        <div className="text-sm my-4">{description}</div>
        <Link
          className="text-brand-orange font-bold text-sm items-center flex group"
          to={buttonLink}
        >
          {buttonText}
          <span className="text-2xl font-thin hidden group-hover:inline-block">
            <MdArrowRightAlt />
          </span>
        </Link>
      </div>
    </div>
  );
};
