import axios from "axios";
import ApiClient from "../ApiClient";
import { Config } from "../Config";

interface ISegmentService {
    getSegment(): any;
}

const SEGMENT_API = "clustering-segmentation";

const SegmentService: ISegmentService = {
    getSegment: async () => {
        const instance = axios.create({
            baseURL: Config?.API_ENDPOINT_AI_URL,
            timeout: 100000
        });
        const url = `${Config?.API_ENDPOINT_AI_URL}${SEGMENT_API}`;
        const response = await instance.get(url);
        return response.data;
    },
};

export default SegmentService;