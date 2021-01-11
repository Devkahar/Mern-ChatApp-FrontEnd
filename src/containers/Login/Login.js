import React, { useState } from 'react'
import axios from '../../helper/axios';
import { Button, TextField } from '@material-ui/core';
import {Redirect, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/actions';
import Spinner from '../../components/Spinner/Spinner';
const Login = () => {
    const auth = useSelector(state => state.auth);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const userLoginHandler = (e)=>{
        e.preventDefault();
        dispatch(login({email,password}))
        setEmail('');
        setPassword('');
        history.push('/')
    }
    if(auth.authenticate){
        return <Redirect to="/"/>
    }
    return (
        <>
            {auth.authenticating ? <Spinner/>: <div className="form">
            <h1>Register To Join Chat Community</h1>
            <form className="form-fields">
                <TextField type="email" label="Email" value={email} placeholder="exampel@gmail.com" onChange={e => setEmail(e.target.value)} />
                <TextField type="password" label="Password" value={password} placeholder="P@$$w0rd" onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" onClick={userLoginHandler}>Submit</Button>
            </form>
            <div className="error">{error && error}</div>
        </div>}
        </>
    )
}

export default Login
