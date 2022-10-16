import { Config } from "./Config";
import axios from "axios";
import TokenHelper from "../helper/TokenHelper";
import RedirectHelper from "../helper/RedirectHelper";

interface ICallConfig {
  disabledIncerceptors: boolean;
}
interface IApiClient {
  get: (relativePath: string, config?: ICallConfig) => Promise<any>;
}
axios.interceptors.request.use(
  function (config: any) {
    if (!TokenHelper.isValid()) {
      RedirectHelper.redirect("/");
    }
    config.headers.common["Authorization"] = `Bearer ${TokenHelper.getToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const ApiClient: IApiClient = {
  get: async (relativePath: string, config) => {
    const url = `${Config?.API_ENDPOINT_URL}${relativePath}`;
    return axios.get(url);
  },
};

export default ApiClient;
