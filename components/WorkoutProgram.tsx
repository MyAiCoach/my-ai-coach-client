"use client";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import WorkoutProgramService from "@/app/services/models/WorkoutProgram/WorkoutProgramService";
import React, { useEffect, useState } from "react";

interface WorkoutProgramProps {
  userGuid: string;
}

const WorkoutProgram: React.FC<WorkoutProgramProps> = ({ userGuid }) => {
  const [workoutProgram, setWorkoutProgram] = useState<ProgramViewDto[]>([]);

  const workoutProgramService = new WorkoutProgramService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProgramViewDto[] =
          await workoutProgramService.getWorkoutProgramsAsync(
            userGuid as string
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
    <section>
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
              <td>{program.Day}</td>
              <td>
                <ul>
                  {program.Exercises.map((exercise, index) => (
                    <li key={index}>
                      <strong>{exercise.Name}</strong> - {exercise.Description}{" "}
                      ({exercise.TargetArea})
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {program.SetReps.map((setRep, index) => (
                    <li key={index}>
                      Set {index + 1}: {setRep.Set} sets of {setRep.Rep}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WorkoutProgram;
