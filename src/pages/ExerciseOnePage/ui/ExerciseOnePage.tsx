import { ThirdEx } from "@/widgets/exercises";
import { useState } from "react";

export const ExerciseOnePage = () => {
  const [, setFinishFirstExersize] = useState(false);
  const [, setResults] = useState<number[]>([]);
  return <ThirdEx setFinish={setFinishFirstExersize} setResults={setResults} />;
};
