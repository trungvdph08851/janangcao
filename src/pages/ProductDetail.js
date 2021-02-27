// import data from '../data.js';
import ProductApi from '../api/productAPI';
import { parseRequestUrl } from '../utils.js';
const ProductsDetail = {
    async render(){
        
        const { id } = parseRequestUrl();
        const { data:product } = await ProductApi.get(id);
        return `
            hello
        `
    }

}
export default ProductsDetail;