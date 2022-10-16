import NumberOfCustomersModel from "../../models/numberOfCustomers/NumberOfCustomersModel";
import ApiClient from "../ApiClient";

interface INumberOfCustomersService {
  getNumberOfCustomers(): Promise<NumberOfCustomersModel>;
}

const NUMBER_OF_CUSTOMERS_API = "api/clusteringSegmentations/getByTotalCustomers";

const NumberOfCustomersService: INumberOfCustomersService = {
  getNumberOfCustomers: async () => {
    const response = await ApiClient.get(NUMBER_OF_CUSTOMERS_API);
    return response.data.data;
  },
};

export default NumberOfCustomersService;