import {
  workoutLevel,
  workoutType,
} from "@/app/contracts/User/CreateWorkoutDto";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nutritionGoal } from "@/app/contracts/User/CreateNutritionDto";
import { Input } from "@/components/ui/input";

const Step2 = () => {
  const { register, setValue } = useFormContext();

  const nutrtionGoalOptions = Object.keys(nutritionGoal).filter((key) =>
    isNaN(Number(key))
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 w-full h-full"
    >
      <div>
        <h2 className="text-xl text-primary">Second One!</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Choose the diet goal and duration
        </p>
      </div>
      <Label>Diet Goal:</Label>
      <Select
        onValueChange={(value) =>
          setValue("nutritionGoal", nutritionGoal[value])
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a type" />
        </SelectTrigger>
        <SelectContent>
          {nutrtionGoalOptions.map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Diet Duration (Days): </Label>
      <Input
        type="number"
        {...register("nutritionDuration", { required: true })}
      />
    </motion.div>
  );
};

export default Step2;
