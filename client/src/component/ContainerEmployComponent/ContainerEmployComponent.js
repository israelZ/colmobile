import React, { useEffect, useState } from 'react';
import { getEmployersById, deleteEmployersById } from '../../service/employers'
import FormDetailsComponent from '../FormDetailsComponent/FormDetailsComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import './ContainerEmploy.css'


function ContainerEmployComponent(props) {
    const color = ['#2C363F', '#E75A7C', '#F2F5EA', '#D6DBD2', '#BBC7A4']
    const [employersList, setEmployersList] = useState([]);
    const [employer, setEmployer] = useState(null);

    useEffect(async () => {
        loadEmployer()
    }, [])

    const loadEmployer = async () => {
        const idCompany = sessionStorage.getItem('idCompany');
        const { data } = await getEmployersById(idCompany)
        setEmployersList(data.resEmployers)
    }
    const deleteEmployer = async (id) => {
        await deleteEmployersById(id)
        loadEmployer()
    }

    const editEmployer = (idEmployer) => {
        const { job, dateJoin, name } = employersList.find(employer => employer._id == idEmployer)
        const employer = { job, dateJoin, name, dateJoin, idEmployer }
        setEmployer(employer)
    }

    const parsDate = (date) => {
        return date.split('T')[0]
    }


    return (<>
        
        <FormDetailsComponent cdLoadEmployer={loadEmployer} employer={employer} parsDate={parsDate} />
        <div className='container-card'>
            {employersList.map((employ, i) => {
                return <div className='shadow-sm card-employer' key={i} style={{ background: color[i%color.length] }}>
                    <div className='box'>
                        <span className='fs-5 title'>{employ.name}</span>
                        <span className='fs-6'>joined in {parsDate(employ.dateJoin)}</span>
                        <span className='fs-6'>{employ.job}</span>
                    </div>
                    <div className='line' />
                    <div className='container-btn'>
                        <button className='btn-card' onClick={() => { editEmployer(employ._id) }} ><FontAwesomeIcon icon={faEdit} />Edit</button>
                        <button className='btn-card' onClick={() => { deleteEmployer(employ._id) }}> <FontAwesomeIcon icon={faTimes} /> Delete</button>
                    </div>
                </div>
            })}
        </div>
    </>);
}

export default ContainerEmployComponent;
