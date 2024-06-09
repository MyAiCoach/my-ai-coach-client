import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { ModelSelection } from "@/app/contracts/User/CreateWorkoutDto";

const Step3 = () => {
  const { register, setValue } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 w-full h-full"
    >
      <div>
        <h2 className="text-xl text-primary">Last One</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Enter the workout time and day count.
        </p>
      </div>
      <Label>Workout Time (minutes): </Label>
      <Input type="number" {...register("workoutTime", { required: true })} />

      <Label>Workout Day Count:</Label>
      <Input
        type="number"
        {...register("workoutDayCount", { required: true })}
      />

      <Label>Choose Ai Service: </Label>
      <Select onValueChange={(value) => setValue("modelSelection", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Choose ai" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(ModelSelection).map(([key, value]) => (
            <SelectItem key={key} value={value.toString()}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
};

export default Step3;
