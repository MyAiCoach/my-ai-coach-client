import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const { register } = useFormContext();

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
    </motion.div>
  );
};

export default Step3;
