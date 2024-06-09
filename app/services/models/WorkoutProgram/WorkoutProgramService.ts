import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";
import BaseService from "../BaseService";
import { RequestParameters } from "../../HttpClientService";

export default class WorkoutProgramService extends BaseService {
  async getWorkoutProgramsAsync(id: string): Promise<ProgramViewDto[]> {
    const requestParameters: Partial<RequestParameters> = {
      controller: "UserExercise",
      queryString: `?id=${id}`,
    };

    const data = await this.httpClientServices.getByIdAsyncWithToken<
      ProgramViewDto[]
    >(requestParameters);

    console.log("WorkoutProgramService", data);

    return data;
  }
}
