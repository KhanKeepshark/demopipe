import { LyingLegLifting } from "@/widgets/lyingLegLifting";
import { ReverseLegBending } from "@/widgets/reverseLegBending";
import { useState } from "react";

export const MainPage = () => {
  const [finishFirstExersize, setFinishFirstExersize] = useState(true);
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
