export interface CreateWorkoutDto {
  age: number;
  weight: number;
  height: number;
  workoutLevel: workoutLevel;
  workoutType: workoutType;
  workoutTime: number;
  workoutDayCount: number;
}

export enum workoutType {
  LoseWeigh = "Lose Weight",
  GainWeight = "Gain Weight",
  ImproveMuscle = "Improve Muscle",
  ImproveCondition = "Improve Condition",
  ImproveFlexibility = "Improve Flexibility",
}

export enum workoutLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Professional = "Professional",
  Expert = "Expert",
}
