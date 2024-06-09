import {
  CreateWorkoutDto,
  ModelSelection,
} from "@/app/contracts/User/CreateWorkoutDto";
import { HttpClientService, RequestParameters } from "../../HttpClientService";
import ProgramViewDto from "@/app/contracts/WorkoutProgram/ProgramViewDto";

export default class AiService {
  httpClientService: HttpClientService = new HttpClientService();

  async getWorkoutProgram(
    data: CreateWorkoutDto,
    modelSelection: ModelSelection
  ): Promise<ProgramViewDto[]> {
    const requestParameters: Partial<RequestParameters> = {
      controller: "Ai",
      action: "/CreateWorkoutAi",
      headers: {
        aiservice:
          modelSelection == ModelSelection.GeminiAIService
            ? "GeminiAIService"
            : "OpenAIService",
      },
    };

    return await this.httpClientService.postAsyncWithToken(
      requestParameters,
      data
    );
  }
}
