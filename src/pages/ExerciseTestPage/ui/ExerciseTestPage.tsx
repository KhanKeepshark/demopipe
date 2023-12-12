import { LyingLegLifting, ReverseLegBending } from "@/widgets/exercises";
import { useState } from "react";

export const ExerciseTestPage = () => {
  const [finishFirstExersize, setFinishFirstExersize] = useState(false);
  const [results, setResults] = useState<number[]>([]);

  return finishFirstExersize ? (
    <ReverseLegBending setResults={setResults} results={results} />
  ) : (
    <LyingLegLifting
      setResults={setResults}
      setFinish={setFinishFirstExersize}
    />
  );
};
