"use client";
import { useState } from "react";
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
import {
  CreateNutritionDto,
  CreateNutritionDtoPlus,
} from "@/app/contracts/User/CreateNutritionDto";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const MultiStepForm = () => {
  const aiService = new AiService();
  const [step, setStep] = useState(1);
  const methods = useForm<CreateNutritionDtoPlus>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: CreateNutritionDtoPlus) => {
    setLoading(true);

    const questionData: CreateNutritionDto = {
      age: data.age,
      height: data.height,
      weight: data.weight,
      glutenInTolerance: data.glutenInTolerance ?? false,
      lactoseInTolerance: data.lactoseInTolerance ?? false,
      nutritionDuration: data.nutritionDuration,
      nutritionGoal: data.nutritionGoal,
      vegan: data.vegan ?? false,
    };
    const model: ModelSelection = data.modelSelection;

    try {
      const response = await aiService.getNutritionProgram(questionData, model);
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

  const loadingStates = [
    {
      text: "Asking for diet program...",
    },
    {
      text: "AI is thinking about your diet...",
    },
    {
      text: "AI is dreaming about your diet...",
    },
    {
      text: "AI is calculating your diet...",
    },
    {
      text: "AI is cooking your menus...",
    },
    {
      text: "AI is testing...",
    },
  ];

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
        {loading && (
          <MultiStepLoader
            loadingStates={loadingStates}
            loading={loading}
            duration={5000}
          />
        )}
      </div>
    </>
  );
};

export default MultiStepForm;
