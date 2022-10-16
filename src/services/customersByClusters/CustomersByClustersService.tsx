import CustomersByClustersModel from "../../models/customersByClusters/CustomersByClustersModel";
import ApiClient from "../ApiClient";

interface ICustomersByClustersService {
  getCustomersByClusters(): Promise<CustomersByClustersModel[]>;
}

const CUSTOMERS_BY_CLUSTERS_API = "api/clusteringSegmentations/getByClusters";

const CustomersByClustersService: ICustomersByClustersService = {
  getCustomersByClusters: async () => {
    const response = await ApiClient.get(CUSTOMERS_BY_CLUSTERS_API);
    return response.data.data;
  },
};

export default CustomersByClustersService;