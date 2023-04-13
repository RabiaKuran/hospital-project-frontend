import ProductAddModel from "../../models/products/ProductAddModel"
import ApiClient from "../ApiClient"

interface IProductDeleteService {
    deleteProduct(id: any): Promise<ProductAddModel>
}

const PRODUCT_GET_ALL_API = "api/products/delete"

const ProductDeleteService: IProductDeleteService = {
    deleteProduct: async (id: any) => {
        const response = await ApiClient.delete(PRODUCT_GET_ALL_API, {
            id: id,
        })
        return response.data
    },
}

export default ProductDeleteService