import axios from "axios";
import { Config } from "../Config";

interface IChurnService {
    getChurn(): any;
}

const CHURN_API = "churn";

const ChurnService: IChurnService = {
    getChurn: async () => {
        const instance = axios.create({
            baseURL: Config?.API_ENDPOINT_AI_URL,
            timeout: 100000
        });
        const url = `${Config?.API_ENDPOINT_AI_URL}${CHURN_API}`;
        const response = await instance.get(url);
        return response.data;
    },
};

export default ChurnService;