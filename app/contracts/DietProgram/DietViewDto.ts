import FoodViewDto from "../Food/FoodViewDto";
import GramViewDto from "../Gram/GramViewDto";

export default interface DietViewDto {
  days: number;
  foods: FoodViewDto[];
  grams: GramViewDto[];
}
