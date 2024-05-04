import axios, { AxiosResponse } from "axios";

export class HttpClientService {
  baseUrl: string = "https://localhost:7216/api/";

  private url(requestParameters: Partial<RequestParameters>): string {
    return `${requestParameters.baseUrl || this.baseUrl}${
      requestParameters.controller
    }${requestParameters.action || ""}${requestParameters.queryString || ""}`;
  }

  async getByIdAsync<T>(
    requestParameters: Partial<RequestParameters>
  ): Promise<T> {
    let url: string = "";

    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else {
      url = this.url(requestParameters);
    }

    const response: AxiosResponse<T> = await axios.get<T>(url);

    return response.data;
  }
}

export class RequestParameters {
  accessModify?: AccessModify;
  controller?: string;
  action?: string;
  queryString?: string;
  baseUrl?: string;
  headers?: any;
  fullEndPoint?: string;
}

export enum AccessModify {
  Public = "public/",
  Private = "",
}
