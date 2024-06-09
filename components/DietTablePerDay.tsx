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
import { ScrollArea } from "./ui/scroll-area";
import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";

type Props = {
  dietProgramDay: DietViewDto | undefined;
};

const DietTablePerDay = ({ dietProgramDay }: Props) => {
  return (
    <>
      <ScrollArea>
        <Tabs
          defaultValue="day-1"
          className="w-full flex flex-col items-center overflow-auto"
        >
          <Table>
            <TableCaption>
              {getDayName(dietProgramDay?.days)} Diet Plan
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Calory</TableHead>
                <TableHead>Protein</TableHead>
                <TableHead>Amount-Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dietProgramDay?.foods?.map((food, foodIndex) => {
                const gram = dietProgramDay.grams[foodIndex];
                return (
                  <TableRow
                    key={`${food.name}-${foodIndex}`}
                    className="cursor-pointer"
                  >
                    <TableCell className="font-medium">{food.name}</TableCell>
                    <TableCell>{food.calory}</TableCell>
                    <TableCell>{food.protein}</TableCell>
                    <TableCell>{food.carbonhydrate}</TableCell>
                    <TableCell>
                      {gram ? `${gram.amount} x ${gram.type}` : "N/A"}
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
      </ScrollArea>
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

export default DietTablePerDay;
