import { HttpClientService } from "../HttpClientService";

export default class BaseService {
  httpClientServices: HttpClientService = new HttpClientService();
}
