import axios from "axios";
import { Config } from "../Config";

interface ICltvService {
    getCltv(): any;
}

const CLTV_API = "cltv";

const CltvService: ICltvService = {
    getCltv: async () => {
        const instance = axios.create({
            baseURL: Config?.API_ENDPOINT_AI_URL,
            timeout: 100000
        });
        const url = `${Config?.API_ENDPOINT_AI_URL}${CLTV_API}`;
        const response = await instance.get(url);
        return response.data;
    },
};

export default CltvService;