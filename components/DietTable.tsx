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
import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";

type Props = {
  dietProgram: DietViewDto[] | null;
};

const DietTable = ({ dietProgram }: Props) => {
  return (
    <Tabs defaultValue="day-1" className="w-full flex flex-col items-center">
      <TabsList className="my-5">
        {dietProgram?.map((dayData, index) => (
          <TabsTrigger
            key={`trigger-${dayData.days}-${index}`}
            value={`day-${dayData.days}`}
            className="px-6"
          >
            {getDayName(dayData.days)}
          </TabsTrigger>
        ))}
      </TabsList>
      {dietProgram?.map((dayData, index) => (
        <TabsContent
          key={`content-${dayData.days}-${index}`}
          value={`day-${dayData.days}`}
        >
          <Table className="w-[1250px]">
            <TableCaption>Diet Plan</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Calory</TableHead>
                <TableHead>Protein</TableHead>
                <TableHead>Carbonhydate</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount-Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dayData.foods?.map((food, foodIndex) => {
                const gram = dayData.grams[foodIndex];
                return (
                  <TableRow
                    key={`${food.name}-${foodIndex}`}
                    className="cursor-pointer"
                  >
                    <TableCell className="font-medium">{food.name}</TableCell>
                    <TableCell>{food.calory}</TableCell>
                    <TableCell>{food.protein}</TableCell>
                    <TableCell>{food.carbonhydrate}</TableCell>
                    <TableCell>{food.description}</TableCell>
                    <TableCell>
                      {gram ? `${gram.amount} x ${gram.type}` : "N/A"}
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

export default DietTable;
