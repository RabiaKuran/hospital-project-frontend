import CustomerLifetimeValueModel from "../../models/customerLifetimeValue/CustomerLifetimeValueModel";
import ApiClient from "../ApiClient";

interface ICustomerLifetimeValueService {
  getCustomerLifetimeValue(): Promise<CustomerLifetimeValueModel>;
}

const CUSTOMER_LIFETIME_VALUE_API = "api/cltv/getByCustomerLifetimeValue";

const CustomerLifetimeValueService: ICustomerLifetimeValueService = {
  getCustomerLifetimeValue: async () => {
    const response = await ApiClient.get(CUSTOMER_LIFETIME_VALUE_API);
    return response.data.data;
  },
};

export default CustomerLifetimeValueService;
