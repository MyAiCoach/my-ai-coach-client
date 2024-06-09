import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Step1 = () => {
  const { register } = useFormContext();

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 w-full h-full"
    >
      <div>
        <h2 className="text-xl text-primary">First Step!</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Start by entering your age, weight and height.
        </p>
      </div>
      <Label>Age: </Label>
      <Input type="number" {...register("age", { required: true })} />

      <Label>Weight: </Label>
      <Input type="number" {...register("weight", { required: true })} />

      <Label>Height:</Label>
      <Input type="number" {...register("height", { required: true })} />
    </motion.div>
  );
};

export default Step1;
