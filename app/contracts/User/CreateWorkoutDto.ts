export interface CreateWorkoutDtoPlus {
  age: number;
  weight: number;
  height: number;
  workoutLevel: workoutLevel;
  workoutType: workoutType;
  workoutDuration: number;
  workoutDayCount: number;
  modelSelection: ModelSelection;
}

export interface CreateWorkoutDto {
  age: number;
  weight: number;
  height: number;
  workoutLevel: workoutLevel;
  workoutType: workoutType;
  workoutDuration: number;
  workoutDayCount: number;
}

export enum workoutType {
  LoseWeight,
  GainMuscle,
  StayFit,
  GainStrength,
  GainEndurance,
  GainFlexibility,
}

export enum workoutLevel {
  Beginner,
  Intermediate,
  Advanced,
  Professional,
  Expert,
}

export enum ModelSelection {
  GeminiAIService = "GeminiAIService",
  OpenAIService = "OpenAIService",
}
