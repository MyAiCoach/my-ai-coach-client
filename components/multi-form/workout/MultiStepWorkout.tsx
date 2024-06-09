"use client";
import { useCallback, useEffect, useState } from "react";
import { useForm, FormProvider, set } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
  CreateWorkoutDto,
  CreateWorkoutDtoPlus,
  ModelSelection,
  workoutType,
} from "@/app/contracts/User/CreateWorkoutDto";
import { Button } from "@/components/ui/button";
import AiService from "@/app/services/models/Ai/AiService";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const MultiStepForm = () => {
  const aiService = new AiService();

  const [step, setStep] = useState(1);
  const methods = useForm<CreateWorkoutDtoPlus>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: CreateWorkoutDtoPlus) => {
    setLoading(true);

    const questionData: CreateWorkoutDto = {
      age: data.age,
      height: data.height,
      weight: data.weight,
      workoutType: data.workoutType,
      workoutLevel: data.workoutLevel,
      workoutDayCount: data.workoutDayCount,
      workoutDuration: data.workoutDuration,
    };
    const model: ModelSelection = data.modelSelection;

    try {
      const response = await aiService.getWorkoutProgram(questionData, model);
      console.log(response);
      router.push("/panel");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "An error occurred while fetching data",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col justify-end w-full max-w-lg mx-auto"
          >
            <AnimatePresence>
              {step === 1 && <Step1 key="step1" />}
              {step === 2 && <Step2 key="step2" />}
              {step === 3 && <Step3 key="step3" />}
            </AnimatePresence>
            <div className="flex gap-4 justify-between mt-10">
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
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default MultiStepForm;
