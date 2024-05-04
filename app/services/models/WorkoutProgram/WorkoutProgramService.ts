import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import BaseService from "../BaseService";

export default class WorkoutProgramService extends BaseService {
  async getWorkoutProgramsAsync<ProgramViewDto>(
    id: string
  ): Promise<ProgramViewDto> {
    const promiseData: ProgramViewDto =
      await this.httpClientServices.getByIdAsync({
        controller: "userexercise",
        queryString: `?id=${id}`,
      });

    return promiseData;
  }
}
