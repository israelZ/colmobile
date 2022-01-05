import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function WelcomeComponent(props) {

    return (
        <div class="card border-primary mb-3" style={{ width: "18rem" }}>
            <div class="card-header">Hi Welcome Back</div>
            <div class="card-body text-primary">
                <h5 class="card-title">Company: {props.nameCompany}</h5>
                <p class="card-text">
                    Welcome to your employee management system
                    Here you can add delete and edit
                </p>
                <div>Enjoy!</div>
            </div>
            <Link className='btn btn-outline-primary' to="/company/employers">Menage Your Employers</Link>
        </div>
    );
}

export default WelcomeComponent;
