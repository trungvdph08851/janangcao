import { parseRequestUrl , $ } from '../../utils.js';
import ProductApi from '../../api/productAPI.js';

const editProduct = {
    async render(){
        const { id } = parseRequestUrl();
        const { data:product } = await ProductApi.get(id);
        return /*html*/`
            <form id="edit-product">
                <lable>Tên Sản Phẩm</lable>
                <input type="text" name="" value="${product.name}" id="product-name">
                <input type="submit" >
            </form>
        `
    },
    async afterRender(){
        const { id } = parseRequestUrl();
        const { data:product } = await ProductApi.get(id);
        $('#edit-product').addEventListener('submit', (e)=>{
            e.preventDefault();
            const newProduct = {
                ...product,
                name: $('#product-name').value
            };
            ProductApi.update(id, newProduct);
            window.location.hash = '/adminproduct'
        })
    }
}
export default editProduct;