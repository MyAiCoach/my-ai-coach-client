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

const Step2 = () => {
  const { register, setValue } = useFormContext();

  const workoutTypeOptions = Object.keys(workoutType).filter((key) =>
    isNaN(Number(key))
  );
  const workoutLevelOptions = Object.keys(workoutLevel).filter((key) =>
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
          Choose the workout type and level.
        </p>
      </div>
      <Label>Workout Type:</Label>
      <Select
        onValueChange={(value) => setValue("workoutType", workoutType[value])}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a type" />
        </SelectTrigger>
        <SelectContent>
          {workoutTypeOptions.map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Workout Level: </Label>
      <Select
        onValueChange={(value) => setValue("workoutLevel", workoutLevel[value])}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a level" />
        </SelectTrigger>
        <SelectContent>
          {workoutLevelOptions.map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
};

export default Step2;
