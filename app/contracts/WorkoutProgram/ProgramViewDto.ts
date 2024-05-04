import Days from "../Enums/Days";
import ExerciseViewDto from "../Exercise/ExerciseViewDto";
import SetRepViewDto from "../SetRep/SetRepViewDto";

export default interface ProgramViewDto {
  Day: Days;
  Exercises: ExerciseViewDto[];
  SetReps: SetRepViewDto[];
}
