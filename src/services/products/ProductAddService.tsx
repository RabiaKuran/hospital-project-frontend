import ProductAddModel from "../../models/products/ProductAddModel";
import ApiClient from "../ApiClient";

interface IProductAddService {
  addProductInfo(values: any): Promise<ProductAddModel>;
}

const ADD_PRODUCT_INFO = "api/products/add";

const ProductAddService: IProductAddService = {
  addProductInfo: async (values: any) => {
    const response = await ApiClient.post(ADD_PRODUCT_INFO, values);

    return response.data;
  },
};

export default ProductAddService;