"use client";
import React, { useEffect, useState } from "react";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "@/app/services/models/WorkoutProgram/WorkoutProgramService";
import NoWorkoutData from "./NoWorkoutData";
import { SkeletonCard } from "./SkeletonCard";
import WorkoutTable from "./WorkoutTable";
import { Skeleton } from "./ui/skeleton";

interface TotalExerciseCount {
  userGuid?: string | undefined;
}

const TotalExerciseCount: React.FC<TotalExerciseCount> = ({ userGuid }) => {
  const [workoutProgram, setWorkoutProgram] = useState<ProgramViewDto[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const workoutProgramService = new WorkoutProgramService();

  useEffect(() => {
    const fetchWorkoutProgram = async () => {
      try {
        const data = await workoutProgramService.getWorkoutProgramsAsync(
          userGuid as string
        );
        setWorkoutProgram(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutProgram();
  }, [userGuid]);
  //data fetching...

  const totalExercisesCount =
    workoutProgram?.reduce((total, program) => {
      return total + program.exercises.length;
    }, 0) || 0;

  return (
    <section className="p-10 w-full h-full">
      {loading ? (
        <Skeleton className="w-full h-full rounded-xl" />
      ) : (
        // get total exercise count

        <div className="flex flex-col items-center justify-center h-full w-full">
          <p>Total</p>
          <h1 className="text-8xl font-black pb-5">{totalExercisesCount}</h1>
          <p className="text-primary text-lg">Exercise for this week</p>
        </div>
      )}
    </section>
  );
};

export default TotalExerciseCount;
