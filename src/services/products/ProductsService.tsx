import ProductsModel from "../../models/products/ProductsModel";
import ApiClient from "../ApiClient";

interface IProductsService {
    getProducts(): Promise<ProductsModel[]>;
}

const PRODUCTS_API = "api/products/getall";

const ProductsService: IProductsService = {
    getProducts: async () => {
        const response = await ApiClient.get(PRODUCTS_API);
        return response.data.data;
    },
};

export default ProductsService;