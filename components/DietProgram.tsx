"use client";
import React, { useEffect, useState } from "react";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import NoWorkoutData from "./NoWorkoutData";
import { SkeletonCard } from "./SkeletonCard";
import WorkoutTable from "./WorkoutTable";
import DietProgramService from "@/app/services/models/DietProgram/DietProgramService";
import DietTable from "./DietTable";
import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";

interface DietProgramProps {
  userGuid?: string | undefined;
}

const DietProgram: React.FC<DietProgramProps> = ({ userGuid }) => {
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

  console.log("DietProgram ?", dietProgram);

  return (
    <section className="p-10">
      {loading ? (
        <SkeletonCard />
      ) : dietProgram?.length === 0 ? (
        <NoWorkoutData />
      ) : (
        <DietTable dietProgram={dietProgram} />
      )}
    </section>
  );
};

export default DietProgram;
