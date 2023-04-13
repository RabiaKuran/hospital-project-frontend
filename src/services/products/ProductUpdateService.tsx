
import ProductAddModel from "../../models/products/ProductAddModel"
import ApiClient from "../ApiClient"

interface IProductUpdateService {
    updateProduct(values: any): Promise<ProductAddModel>
}

const UPDATE_PRODUCT_API = "api/products/update"

const ProductUpdateService: IProductUpdateService = {
    updateProduct: async (values: any) => {
        const response = await ApiClient.put(UPDATE_PRODUCT_API, values)
        return response.data
    },
}

export default ProductUpdateService
