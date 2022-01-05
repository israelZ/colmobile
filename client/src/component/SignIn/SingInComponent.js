import React,{useState} from 'react';
import { hasCompany } from '../../service/company'
import {  useNavigate } from "react-router-dom";
import classNames  from 'classnames';
import './SingIn.css';

function SingInComponent(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isError, setError] = useState(true);


    const handlerUser = (e) => {
        const username = (e.target && e.target.value) ? e.target.value : null
        setUsername(username)
    }
    const handlerPassword = (e) => {
        const password = (e.target && e.target.value) ? e.target.value : null
        setPassword(password)
    }

    const clickLogIn = async () => {
        const {cbSetCompany}= props
        if (username && password) {
            const {data} = await hasCompany(username, password)
            if (data.id) {
                cbSetCompany(data.id,data.nameCompany)
                navigate("/company");
            }
        }
        setError(false)
    }

    return (

        <div className='form-sign'>
            <div className='header'>
                Welcome Back
            </div>
            <div className='container-input'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="user" placeholder='Username' onChange={handlerUser} />
                    <label htmlFor="user">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlerPassword} />
                    <label htmlFor="password">Password</label>
                </div>
                <p className={classNames('error',{'err-abel':isError})}>one or more of the details is incorrect</p>
                <button className='btn-sub' onClick={clickLogIn}>LOG IN</button>
            </div>
        </div>
    );
}

export default SingInComponent;
