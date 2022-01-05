import axios from 'axios';


export function hasCompany(companyName,password){
    return axios.post('/company/get',{companyName,password})
}