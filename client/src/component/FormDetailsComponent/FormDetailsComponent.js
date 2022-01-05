import React, { useEffect, useState } from 'react';
import {  addEmployers, updateEmployers } from '../../service/employers'
import classNames  from 'classnames';
import './FormDetailsComponent.css'


function FormDetailsComponent(props) {


    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [date, setDate] = useState('');
    const [idEmployer, setIdEmployer] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [isError, setIsError] = useState(true);

    useEffect(() => {
        if (props.employer) {
            const { job, name, dateJoin, idEmployer } = props.employer
            setDate(props.parsDate(dateJoin))
            setName(name)
            setIdEmployer(idEmployer)
            setJob(job)
            setIsEdit(true)
        }

    }, [props.employer])

    const resetEdit = () => {
        setJob('')
        setDate('')
        setName('')
        setIsEdit(false)
        setIsError(true)
    }



    const handlerName = (e) => {
        const name = (e.target && e.target.value) ? e.target.value : null
        setName(name)
    }
    const handlerJob = (e) => {
        const job = (e.target && e.target.value) ? e.target.value : null
        setJob(job)
    }
    const handlerDate = (e) => {
        const date = (e.target && e.target.value) ? e.target.value : null
        setDate(date)
    }

    const clickInsertAndUpdate = async () => {
        const { cdLoadEmployer } = props
        const idCompany = sessionStorage.getItem('idCompany');
        if (date && job && name && idCompany) {
            const employer = { name: name, date: date, job: job, idCompany }
            isEdit ? await updateEmployers(employer, idEmployer) : await addEmployers(employer)
            resetEdit()
            cdLoadEmployer()
        }
        else
        {
            setIsError(false)
        }
    }

    return (
        <div className='container-input'>
            <div className='fs-6 alert alert-primary'>{isEdit ? 'Update Employer' : 'Insert New Employer'}</div>
            <div className="form-floating  mb-3">
                <input type="text" className="form-control" id="name" value={name} placeholder='Name' onChange={handlerName} />
                <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="job" placeholder='Job' value={job} onChange={handlerJob} />
                <label htmlFor="job">Job</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="date" placeholder='Date' value={date} onChange={handlerDate} />
                <label htmlFor="date">Date</label>
            </div>
            <p className={classNames('error',{'error-abel':isError})}>one or more of the details is incorrect</p>
            <button className='btn-sub' onClick={clickInsertAndUpdate}>{isEdit ? 'update' : 'add'}</button>
            {isEdit && <button className='btn-sub' onClick={resetEdit}>reset</button>}
        </div>
    );
}

export default FormDetailsComponent;
