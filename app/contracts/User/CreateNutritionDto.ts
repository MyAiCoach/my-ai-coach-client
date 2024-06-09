import { ModelSelection } from "./CreateWorkoutDto";

export interface CreateNutritionDtoPlus {
  age: number;
  weight: number;
  height: number;
  nutritionGoal: nutritionGoal;
  nutritionDuration: number;
  lactoseInTolerance: boolean;
  glutenInTolerance: boolean;
  vegan: boolean;
  modelSelection: ModelSelection;
}

export interface CreateNutritionDto {
  age: number;
  weight: number;
  height: number;
  nutritionGoal: nutritionGoal;
  nutritionDuration: number;
  lactoseInTolerance: boolean;
  glutenInTolerance: boolean;
  vegan: boolean;
}

export enum nutritionGoal {
  WeightLoss,
  WeightGain,
  MaintainWeight,
}
