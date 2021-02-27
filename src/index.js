import Productspage from './pages/Productspage.js';
import mainCategory from './components/mainCategory.js';
import { parseRequestUrl, $ } from './utils.js';
import CategoryPage from './pages/CategoryPage.js';
import header from './components/header.js';

const routes = {
    '/': Productspage,
    '/category/:id' : CategoryPage
}

const router = async () =>{
    const { resource, id} = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '')
    const page = routes[parseUrl] ? routes[parseUrl] : ''
    $('#main-header').innerHTML = await header.render();
    $('#main-category').innerHTML = await mainCategory.render();
    $('#main-content').innerHTML = await page.render();
    await page.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);