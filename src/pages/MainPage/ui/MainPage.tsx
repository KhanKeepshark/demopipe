import { ExerciseOne } from "@/widgets/ExerciseOne";
import { RightLegExercise } from "@/widgets/rightLegExercise";
import { useState } from "react";

export const MainPage = () => {
  const [finishFirstExersize, setFinishFirstExersize] = useState(false);
  return finishFirstExersize ? (
    <RightLegExercise />
  ) : (
    <ExerciseOne finish={setFinishFirstExersize} />
  );
};
