import axios from "axios";
import { Config } from "../Config";

interface ICrossSellService {
    getCrossSell(): any;
}

const CROSS_SELL_API = "market-basket-analysis";

const CrossSellService: ICrossSellService = {
    getCrossSell: async () => {
        const instance = axios.create({
            baseURL: Config?.API_ENDPOINT_AI_URL,
            timeout: 1000000000000000
        });
        const url = `${Config?.API_ENDPOINT_AI_URL}${CROSS_SELL_API}`;
        const response = await instance.get(url);
        return response.data;
    },
};

export default CrossSellService;