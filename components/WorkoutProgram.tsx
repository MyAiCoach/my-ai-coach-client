"use client";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "@/app/services/models/WorkoutProgram/WorkoutProgramService";
import React, { useEffect, useState } from "react";
import NoWorkoutData from "./NoWorkoutData";
import { SkeletonCard } from "./SkeletonCard";

interface WorkoutProgramProps {
  userGuid?: string | undefined;
}

const WorkoutProgram: React.FC<WorkoutProgramProps> = ({ userGuid }) => {
  const [workoutProgram, setWorkoutProgram] = useState<ProgramViewDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const workoutProgramService = new WorkoutProgramService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProgramViewDto[] =
          await workoutProgramService.getWorkoutProgramsAsync(
            userGuid as string
          );
        console.log("Data:", data); // Gelen veriyi kontrol etmek için log
        setWorkoutProgram(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Hata durumunda logla
      } finally {
        setLoading(false); // Veri çekme işlemi tamamlandığında loading'i false yap
      }
    };

    fetchData();
  }, []); // useEffect hook'unun yalnızca bir kere çalışmasını sağlamak için boş bir array kullanıyoruz

  return (
    <>
      <section className="p-10">
        {loading ? (
          <SkeletonCard />
        ) : workoutProgram.length === 0 ? (
          <NoWorkoutData />
        ) : (
          <p>this is workout program !</p>
        )}
      </section>
    </>
  );
};

export default WorkoutProgram;
