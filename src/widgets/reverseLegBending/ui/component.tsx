import { FC, useState } from "react";
import { ReverseLegBendingLeft } from "./leftLeg";
import { ReverseLegBendingRight } from "./rightLeg";
import { ReverseLegBendingProps } from "../models/ReverseLegBending";

export const ReverseLegBendingsds: FC<ReverseLegBendingProps> = ({
  setResults,
  results,
}) => {
  const [finish, setFinish] = useState(false);

  return finish ? (
    <ReverseLegBendingRight setResults={setResults} results={results} />
  ) : (
    <ReverseLegBendingLeft setFinish={setFinish} setResults={setResults} />
  );
};
