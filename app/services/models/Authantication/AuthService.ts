import { LoginResponseDto } from "@/app/contracts/User/LoginResponseDto";
import { UserRegisterDto } from "@/app/contracts/User/UserRegister";
import {
  HttpClientService,
  RequestParameters,
} from "@/app/services/HttpClientService";

export default class AuthService {
  httpClientService: HttpClientService = new HttpClientService();

  async register(data: UserRegisterDto) {
    const requestParameters: Partial<RequestParameters> = {
      controller: "Auth",
      action: "/register",
    };
    return await this.httpClientService.postAsync(requestParameters, data);
  }

  async login(data: {
    userName: string;
    password: string;
  }): Promise<LoginResponseDto> {
    const requestParameters: Partial<RequestParameters> = {
      controller: "auth",
      action: "/login",
    };

    return await this.httpClientService.postAsync<LoginResponseDto>(
      requestParameters,
      data
    );
  }

  async pingAuth() {
    const requestParameters: Partial<RequestParameters> = {
      controller: "auth",
      action: "/ping",
    };
    return await this.httpClientService.getByIdAsyncWithToken(
      requestParameters
    );
  }
}
