// import category from '../api/categoryAPI';
import ProductApi from '../api/productAPI.js';
import { parseRequestUrl } from '../utils.js';
const CategoryPage = {
    async render(){
        
        const { id } = parseRequestUrl();
        const {data:product} = await ProductApi.getAll();
        const result = product.filter(product => product.cate_id == id).map(products=>{
            return /*html*/`
                    <!-- Start Single Default Product -->
                    <div class="product__box product__default--single text-center">
                    <!-- Start Product Image -->
                    <div class="product__img-box  pos-relative">
                        <a href="/#/productdetail/${products.id}" class="product__img--link">
                            <img class="product__img img-fluid" src="${products.image}" alt="">
                        </a>
                        <!-- Start Procuct Label -->
                        <span class="product__label product__label--sale-dis">-34%</span>
                        <!-- End Procuct Label -->
                        <!-- Start Product Action Link-->
                        <ul class="product__action--link pos-absolute">
                            <li><a href="#modalAddCart" data-toggle="modal"><i class="icon-shopping-cart"></i></a></li>
                            <li><a href="compare.html"><i class="icon-sliders"></i></a></li>
                            <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                            <li><a href="#modalQuickView" data-toggle="modal"><i class="icon-eye"></i></a></li>
                        </ul> <!-- End Product Action Link -->
                    </div> <!-- End Product Image -->
                    <!-- Start Product Content -->
                    <div class="product__content m-t-20">
                        <ul class="product__review">
                            <li class="product__review--fill"><i class="icon-star"></i></li>
                            <li class="product__review--fill"><i class="icon-star"></i></li>
                            <li class="product__review--fill"><i class="icon-star"></i></li>
                            <li class="product__review--fill"><i class="icon-star"></i></li>
                            <li class="product__review--blank"><i class="icon-star"></i></li>
                        </ul>
                        <a href="product-single-default.html" class="product__link">${products.name}</a>
                        <div class="product__price m-t-5">
                            <span class="product__price">${products.price} <del>$29.00</del></span>
                        </div>
                    </div> <!-- End Product Content -->
                    </div>
                <!-- End Single Default Product -->
            `
        }).join("");
        return /*html*/`
                    <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!-- Start Section Title -->
                            <div class="section-content section-content--border m-b-35">
                                <h5 class="section-content__title">Sản Phẩm</h5>
                            </div>  <!-- End Section Title -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content tab-animate-zoom">
                                <!-- Start Single Tab Item -->
                                <div class="default-slider default-slider--hover-bg-red product-default-slider">
                                    <div class="product-default-slider-4grid-2rows gap__col--30 gap__row--40">
                                        ${result} 
                                    </div>
                                </div>
                                <!-- End Single Tab Item -->
                            </div>
                        </div>
                    </div>
                </div>
            `
    }

}
export default CategoryPage;