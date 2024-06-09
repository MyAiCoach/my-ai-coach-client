import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutTable from "@/components/WorkoutTable";
import { useState } from "react";

type Props = {
  programs: ProgramViewDto[];
};

export default async function WorkoutProgramPage({ programs }: Props) {
  return (
    <main className="lg:py-24 lg:px-72 px-9 py-24">
      <h1 className="text-4xl font-bold">Workout Program</h1>
      <WorkoutTable workoutProgram={programs} />
    </main>
  );
}
