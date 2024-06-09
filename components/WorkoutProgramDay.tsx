"use client";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "@/app/services/models/WorkoutProgram/WorkoutProgramService";
import React, { useEffect, useState } from "react";
import getCurrentDay from "@/lib/getCurrentDay";
import { SkeletonCard } from "./SkeletonCard";
import NoWorkoutData from "./NoWorkoutData";
import WorkoutTablePerDay from "./WorkoutTablePerDay";

type WorkoutByDayProps = {
  userGuid?: string | undefined;
};

const WorkoutProgramDay: React.FC<WorkoutByDayProps> = ({ userGuid }) => {
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
    <>
      {loading ? (
        <SkeletonCard />
      ) : workoutProgram?.length === 0 ? (
        <NoWorkoutData />
      ) : (
        <WorkoutTablePerDay
          workoutProgram={workoutProgram?.find((p) => p.day == getCurrentDay())}
        />
      )}
    </>
  );
};

export default WorkoutProgramDay;
