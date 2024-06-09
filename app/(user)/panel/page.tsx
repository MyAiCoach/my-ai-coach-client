import MaximumCalory from "@/components/MaximumCalory";
import DietProgram from "@/components/DietProgram";
import DietProgramDay from "@/components/DietProgramDay";
import TotalExerciseCount from "@/components/TotalExerciseCount";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import WorkoutProgramDay from "@/components/WorkoutProgramDay";

import { useAuth } from "@/hooks/Auth";
import { Component, SmileIcon } from "lucide-react";

export default async function Panel() {
  const user = await useAuth.fromServer();
  const userID: any =
    user?.[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];

  const items = [
    {
      component: <WorkoutProgramDay userGuid={userID} />,
    },
    {
      component: <TotalExerciseCount userGuid={userID} />,
    },
    {
      component: <MaximumCalory userGuid={userID} />,
    },
    {
      component: <DietProgramDay userGuid={userID} />,
    },
  ];

  return (
    <>
      <main className="lg:py-24 lg:px-72 px-9 py-24">
        <h1 className="text-4xl font-bold">Welcome to Dashboard</h1>
        <BentoGrid className="max-w-8xl mx-auto pt-20">
          {items.map((item, i) => (
            <BentoGridItem
              component={item.component}
              className={i === 0 || i === 3 ? "md:col-span-3" : ""}
            />
          ))}
        </BentoGrid>
      </main>
    </>
  );
}
