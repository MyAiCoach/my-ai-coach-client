import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

export class HttpClientService {
  baseUrl: string = "https://localhost:7216/api/";

  private url(requestParameters: Partial<RequestParameters>): string {
    return `${requestParameters.baseUrl || this.baseUrl}${
      requestParameters.controller
    }${requestParameters.action || ""}${requestParameters.queryString || ""}`;
  }

  async getByIdAsyncWithToken<T>(
    requestParameters: Partial<RequestParameters>
  ): Promise<T> {
    const token = Cookies.get("token")?.valueOf();
    const headers = { Authorization: `Bearer ${token}` };

    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint;
    } else {
      url = this.url(requestParameters);
    }

    const response: AxiosResponse<T> = await axios.get<T>(url, { headers });
    return response.data;
  }

  async postAsyncWithToken<T>(
    requestParameters: Partial<RequestParameters>,
    data: any
  ): Promise<T> {
    const token = Cookies.get("token")?.valueOf();
    const headers = { Authorization: `Bearer ${token}` };

    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint;
    } else {
      url = this.url(requestParameters);
    }

    const response: AxiosResponse<T> = await axios.post<T>(url, data, {
      headers,
    });
    return response.data;
  }

  async postAsync<T>(
    requestParameters: Partial<RequestParameters>,
    data: any
  ): Promise<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint;
    } else {
      url = this.url(requestParameters);
    }

    const response: AxiosResponse<T> = await axios.post<T>(url, data);
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
