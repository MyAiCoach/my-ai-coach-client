"use client";
import React, { useEffect, useState } from "react";
import getCurrentDay from "@/lib/getCurrentDay";
import NoWorkoutData from "./NoWorkoutData";
import WorkoutTablePerDay from "./WorkoutTablePerDay";
import { Skeleton } from "./ui/skeleton";
import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";
import DietProgramService from "@/app/services/models/DietProgram/DietProgramService";
import DietTablePerDay from "./DietTablePerDay";

type DietProgramDayProps = {
  userGuid?: string | undefined;
};

const DietProgramDay: React.FC<DietProgramDayProps> = ({ userGuid }) => {
  const [dietProgram, setDietProgram] = useState<DietViewDto[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dietProgramService = new DietProgramService();

  useEffect(() => {
    const fetchWorkoutProgram = async () => {
      try {
        const data = await dietProgramService.getDietProgramsAsync(
          userGuid as string
        );
        setDietProgram(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutProgram();
  }, [userGuid]);
  //data fetching...

  return (
    <>
      {loading ? (
        <Skeleton className="w-full h-full rounded-xl" />
      ) : dietProgram?.length === 0 ? (
        <NoWorkoutData />
      ) : (
        <DietTablePerDay
          dietProgramDay={dietProgram?.find((p) => p.days == getCurrentDay())}
        />
      )}
    </>
  );
};

export default DietProgramDay;
