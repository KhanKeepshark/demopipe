import { ThirdEx } from "@/widgets/exercises";
import { useState } from "react";

export const ExerciseOnePage = () => {
  const [finishFirstExersize, setFinishFirstExersize] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  return <ThirdEx setFinish={setFinishFirstExersize} setResults={setResults} />;
};
