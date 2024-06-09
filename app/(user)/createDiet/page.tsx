import MultiStepForm from "@/components/multi-form/nutrition/MultiStepNutrition";
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
