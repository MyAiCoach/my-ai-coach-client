import { Angry, Dumbbell } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const NoWorkoutData = (props: Props) => {
  return (
    <section className="flex flex-col justify-center items-center h-96 gap-5">
      <Angry className="text-secondary w-20 h-20 m-5" />
      <p className="text-gray-400">There is no workout data available</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl">Let's create a</h1>
        <h1 className="font-bold text-5xl uppercase"> Workout Program</h1>
      </div>
      <Button variant={"default"}>Let's Create</Button>
    </section>
  );
};

export default NoWorkoutData;
