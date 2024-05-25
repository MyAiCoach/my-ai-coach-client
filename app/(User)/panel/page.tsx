"use client";
import WorkoutProgram from "@/components/WorkoutProgram";
import { useAuth } from "@/hooks/Auth";

export default function Panel() {
  const user = useAuth();

  console.log(user);
  return (
    <main>
      <h1>Home</h1>
      <p>Welcome to your new project!</p>
      <WorkoutProgram userGuid={"123456789"} />
    </main>
  );
}
