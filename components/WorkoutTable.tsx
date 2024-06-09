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

type Props = {
  workoutProgram: ProgramViewDto[] | null;
};

const WorkoutTable = ({ workoutProgram }: Props) => {
  return (
    <Tabs defaultValue="day-1" className="w-full flex flex-col items-center">
      <TabsList className="my-5">
        {workoutProgram?.map((dayData, index) => (
          <TabsTrigger
            key={`trigger-${dayData.day}-${index}`}
            value={`day-${dayData.day}`}
            className="px-6"
          >
            {getDayName(dayData.day)}
          </TabsTrigger>
        ))}
      </TabsList>
      {workoutProgram?.map((dayData, index) => (
        <TabsContent
          key={`content-${dayData.day}-${index}`}
          value={`day-${dayData.day}`}
        >
          <Table className="w-[1250px]">
            <TableCaption>Workout Plan</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Target Area</TableHead>
                <TableHead>Set x Rep</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dayData.exercises?.map((exercise, exerciseIndex) => {
                const setRep = dayData.setReps[exerciseIndex];
                return (
                  <TableRow
                    key={`${exercise.name}-${exerciseIndex}`}
                    className="cursor-pointer "
                  >
                    <TableCell className="font-medium py-5">
                      {exercise.name}
                    </TableCell>
                    <TableCell className="py-5">
                      {exercise.description}
                    </TableCell>
                    <TableCell className="py-5">
                      {exercise.targetArea}
                    </TableCell>
                    <TableCell className="py-5">
                      {setRep ? `${setRep.set} x ${setRep.rep}` : "N/A"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const getDayName = (dayNumber: number) => {
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

export default WorkoutTable;
