import DietViewDto from "@/app/contracts/DietProgram/DietViewDto";
import { RequestParameters } from "../../HttpClientService";
import BaseService from "../BaseService";

export default class DietProgramService extends BaseService {
  async getDietProgramsAsync(id: string): Promise<DietViewDto[]> {
    const requestParameters: Partial<RequestParameters> = {
      controller: "UserNutrition",
      queryString: `?id=${id}`,
    };

    const data = await this.httpClientServices.getByIdAsyncWithToken<
      DietViewDto[]
    >(requestParameters);

    console.log("DietProgramService", data);

    return data;
  }
}
