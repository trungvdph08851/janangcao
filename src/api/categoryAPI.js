import { axiosClient } from './axiosClient';

const categoryAPI = {
    getAll(){
        const url = `/category`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    }
}
export default categoryAPI;