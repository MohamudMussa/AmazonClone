import '../style/Login.css'
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

const Login = () => {
    const history = useHistory();


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>
        </div>
    )
}

export default Login
