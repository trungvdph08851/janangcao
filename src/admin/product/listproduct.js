import ProductApi from "../../api/productAPI";
import { parseRequestUrl, $, reRender } from '../../utils.js';


const Listproduct = {
    async render() {
        const { data: product } = await ProductApi.getAll();
        return /*html*/ `
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>price</th>
                <th><a href="/#/addProduct">Creat</a> </th>
            </tr>
            </thead>
            <tbody>
            
                ${product.map((product, index) => {
            return `
                    <tr>
                        <td>${index}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            
                            <a href="/#/edit-product/${product.id}">EDIT</a>
                            <button class="btn btn-remove" data-id="${product.id}">Remove</button>
                        </td>
                    </tr>
                 `
        }).join("")}
            </tbody>
        </table>
        `
    },
    async afterRender(){
        const btns = $('#list-product .btn');
        btns.forEach( btn =>{
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                const question = confirm('bạn có chắc muốn xóa không');
                if(question){
                    ProductApi.remove(id);
                    reRender(Listproduct, '#list-product');
                }
                
            })
        })
    }
}
export default Listproduct;