import axios from 'axios';


export function getEmployersById(idCompany){
    return axios.post('/employer/get',{id: idCompany})
}
export function deleteEmployersById(id){
    return axios.delete(`/employer/delete/${id}`)
}

export function addEmployers(employer){
    return axios.put(`/employer/add`,employer)
}
export function updateEmployers(employer,idEmployer){
    return axios.post(`/employer/update/${idEmployer}`,employer)
}