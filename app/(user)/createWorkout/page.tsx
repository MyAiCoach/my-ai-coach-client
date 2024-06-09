import MultiStepForm from "@/components/multi-form/workout/MultiStepWorkout";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <MultiStepForm />
    </div>
  );
};

export default page;
