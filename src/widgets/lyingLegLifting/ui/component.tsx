import { FC, useState } from "react";
import { LyingLegLiftingLeft } from "./leftLeg";
import { LyingLegLiftingRight } from "./rightLeg";
import { LyingLegLiftingProps } from "../models/LyingLegLiftingModels";

export const LyingLegLiftingfff: FC<LyingLegLiftingProps> = ({
  setResults,
  setFinish,
}) => {
  const [finishLeg, setFinishLeg] = useState(false);

  return finishLeg ? (
    <LyingLegLiftingRight setResults={setResults} setFinish={setFinish} />
  ) : (
    <LyingLegLiftingLeft setFinish={setFinishLeg} setResults={setResults} />
  );
};
