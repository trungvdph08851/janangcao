import { $} from '../../utils.js';
import ProductApi from '../../api/productAPI.js';
import firebase from '../../firebase';
const addProduct = {
    async render(){
        return /*html*/`
            <form id="form-add">
                <lable>Tên Sản Phẩm</lable>
                <input type="text" name="" id="product-name">
                <input type="file" name="" id="product-image">
                <input type="submit" >
            </form>
        `
    },
    async afterRender(){
        $('#form-add').addEventListener('submit', e =>{
            e.preventDefault();
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function (){
                console.log('up ảnh thành công');
            })
            // const product ={
            //     name: $('#product-name').value
            // }
            // ProductApi.add(product);
            // window.location.hash= '/adminproduct'
        })
    }
}
export default addProduct;