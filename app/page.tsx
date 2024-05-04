"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProgramViewDto from "./contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "./services/models/WorkoutProgram/WorkoutProgramService";

export default function Home() {
  const { id } = useParams();
  const user = "85e05601-6676-4693-b939-338d058b6371";
  const [workoutProgram, setWorkoutProgram] = useState<ProgramViewDto[]>([]);

  const workoutProgramService = new WorkoutProgramService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await workoutProgramService.getWorkoutProgramsAsync(
          user as string
        );
        console.log("Data:", data); // Gelen veriyi kontrol etmek için log
        setWorkoutProgram(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Hata durumunda logla
      }
    };

    fetchData();
  }, []); // useEffect hook'unun yalnızca bir kere çalışmasını sağlamak için boş bir array kullanıyoruz

  return (
    <main>
      <h1>Workout Program</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Exercises</th>
            <th>Sets & Reps</th>
          </tr>
        </thead>
        <tbody>
          {workoutProgram.map((program, index) => (
            <tr key={index}>
              <td>{program.day}</td>
              <td>
                <ul>
                  {program.exercises.map((exercise, index) => (
                    <li key={index}>
                      <strong>{exercise.name}</strong> - {exercise.description}{" "}
                      ({exercise.targetArea})
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {program.setReps.map((setRep, index) => (
                    <li key={index}>
                      Set {index + 1}: {setRep.set} sets of {setRep.rep}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
