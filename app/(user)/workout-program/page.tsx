import WorkoutProgram from "@/components/WorkoutProgram";
import { useAuth } from "@/hooks/Auth";

export default async function WorkoutProgramPage() {
  const user = await useAuth.fromServer();
  const userID: any =
    user?.[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  return (
    <main className="lg:py-24 lg:px-72 px-9 py-24">
      <h1 className="text-4xl font-bold">Workout Program</h1>
      <WorkoutProgram userGuid={userID} />
    </main>
  );
}
