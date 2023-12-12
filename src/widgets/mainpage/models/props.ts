import { ReactNode } from "react";

export interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface QuestionBlockProps {
  question: string;
  children: ReactNode;
}
