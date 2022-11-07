import FloorModel from "../../models/floor/FloorModel";
import ApiClient from "../ApiClient";

interface IFloorService {
    getFloor(): Promise<FloorModel[]>;
}

const FLOOR_API = "api/floor/getall";

const FloorService: IFloorService = {
    getFloor: async () => {
        const response = await ApiClient.get(FLOOR_API);
        return response.data.data;
    },
};

export default FloorService;