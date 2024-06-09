"use client";
import React, { useEffect, useState } from "react";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "@/app/services/models/WorkoutProgram/WorkoutProgramService";
import NoWorkoutData from "./NoWorkoutData";
import { SkeletonCard } from "./SkeletonCard";
import WorkoutTable from "./WorkoutTable";

interface WorkoutProgramProps {
  userGuid?: string | undefined;
}

const WorkoutProgram: React.FC<WorkoutProgramProps> = ({ userGuid }) => {
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

  console.log("WorkoutProgram ?", workoutProgram);

  return (
    <section className="p-10">
      {loading ? (
        <SkeletonCard />
      ) : workoutProgram?.length === 0 ? (
        <NoWorkoutData />
      ) : (
        <WorkoutTable workoutProgram={workoutProgram} />
      )}
    </section>
  );
};

export default WorkoutProgram;
