"use client";
import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";
import DietProgramService from "@/app/services/models/DietProgram/DietProgramService";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import NoWorkoutData from "./NoWorkoutData";
import { GlassWater, Salad, ShieldOff } from "lucide-react";

interface MaximumCaloryProps {
  userGuid?: string | undefined;
}

const MaximumCalory: React.FC<MaximumCaloryProps> = ({ userGuid }) => {
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

  console.log("DietProgram calory ?", dietProgram);

  const totalMealCount =
    dietProgram?.reduce((total, program) => {
      return total + program.foods.length;
    }, 0) || 0;

  return (
    <section className="p-10">
      {loading ? (
        <Skeleton className="w-full h-full rounded-xl" />
      ) : (
        // get total exercise count

        <div className="flex flex-col items-center justify-center h-full w-full">
          <p>Total</p>
          <h1 className="text-8xl font-black pb-5">{totalMealCount}</h1>
          <p className="text-primary text-lg">Meal for this week</p>
        </div>
      )}
    </section>
  );
};

export default MaximumCalory;
