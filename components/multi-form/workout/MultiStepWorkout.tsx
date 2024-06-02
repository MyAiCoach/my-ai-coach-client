"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { CreateWorkoutDto } from "@/app/contracts/User/CreateWorkoutDto";
import { Button } from "@/components/ui/button";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<CreateWorkoutDto>();

  const onSubmit = (data: CreateWorkoutDto) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-end w-96 h-96"
        >
          <AnimatePresence>
            {step === 1 && <Step1 key="step1" />}
            {step === 2 && <Step2 key="step2" />}
            {step === 3 && <Step3 key="step3" />}
          </AnimatePresence>

          <div className="gap-10 flex justify-between mt-10">
            {step > 1 && (
              <Button
                variant={"secondary"}
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            {step < 3 && (
              <Button type="button" onClick={() => setStep(step + 1)}>
                Next
              </Button>
            )}
            {step === 3 && <Button type="submit">Submit</Button>}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
