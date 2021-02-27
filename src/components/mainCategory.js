import CategoryAPI from '../api/categoryAPI';
const mainCategory = {
    
    async render(){
        const  {data:category}  = await CategoryAPI.getAll();
        return /*html*/`
            ${
                category.map(category =>{
                        return `
                            <!-- Start Single catagory Product -->
                            <div class="product__catagory--single">
                                <!-- Start Product Content -->
                                <div class="product__content product__content--catagory">
                                    <a href="/#/category/${category.id}" class="product__link">${category.name}</a>
                                </div> <!-- End Product Content -->
                                <!-- Start Product Image -->
                                <div class="product__img-box product__img-box--catagory">
                                    <a href="/#/category/${category.id}" class="product__img--link">
                                        <img class="product__img img-fluid" src="./src/assets/img/product/category/category-home-1-img-1.jpg" alt="">
                                    </a>
                                </div> <!-- End Product Image -->
                            </div> <!-- End Single Default Product -->
                            `
                }).join("")
            }
        `
    }
}
export default mainCategory;