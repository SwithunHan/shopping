import axios from "axios";

export function getGoodsList(param){
    if(param.name!==""){
        return axios.post(`/api/goodsList`,param);
    }else{
        return axios.get(`/api/goodsList`);
    }
}