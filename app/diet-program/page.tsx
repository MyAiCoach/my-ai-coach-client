import DietTable from "@/components/DietTable";
import DietViewDto from "../contracts/DietProgram/DietViewDto";

type Props = {
  programs: DietViewDto[];
};

export default async function WorkoutProgramPage({ programs }: Props) {
  return (
    <main className="lg:py-24 lg:px-72 px-9 py-24">
      <h1 className="text-4xl font-bold">Diet Program</h1>
      <DietTable dietProgram={programs} />
    </main>
  );
}
