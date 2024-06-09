import Days from "../Enums/Days";
import ExerciseViewDto from "../Exercise/ExerciseViewDto";
import SetRepViewDto from "../SetRep/SetRepViewDto";

export default interface ProgramViewDto {
  day: number;
  exercises: ExerciseViewDto[];
  setReps: SetRepViewDto[];
}
