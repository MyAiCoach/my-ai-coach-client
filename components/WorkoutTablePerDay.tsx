import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  workoutProgram: ProgramViewDto | undefined;
};

const WorkoutTablePerDay = ({ workoutProgram }: Props) => {
  return (
    <>
      <Tabs defaultValue="day-1" className="w-full flex flex-col items-center">
        <Table className="my-5">
          <TableCaption>
            {getDayName(workoutProgram?.day)} Workout Plan
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Target Area</TableHead>
              <TableHead>Set x Rep</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workoutProgram?.exercises?.map((exercise, exerciseIndex) => {
              const setRep = workoutProgram.setReps[exerciseIndex];
              return (
                <TableRow
                  key={`${exercise.name}-${exerciseIndex}`}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium py-5">
                    {exercise.name}
                  </TableCell>
                  <TableCell>{exercise.targetArea}</TableCell>
                  <TableCell>
                    {setRep ? `${setRep.set} x ${setRep.rep}` : "N/A"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Tabs>
      <div className="flex items-center justify-center">
        <Link href="/workout-program">
          <Button variant={"link"}>View Detail</Button>
        </Link>
      </div>
    </>
  );
};

const getDayName = (dayNumber: number | undefined) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "";
  }
};

export default WorkoutTablePerDay;
