import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from '../../helper/axios';
import "./Signup.css"
const Signup = () => {
    const history = useHistory('/');

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const registerUserHandler = (e)=>{
        e.preventDefault();
        axios.post('/register',{firstName,lastName,email,password})
        .then(res =>{
            if(res.status===201){
                history.push('/');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
            }
        })
        .catch(error =>{
            console.log(error);
            setError(error)
        })
        
    }
    return (
        <div className="form">
            <h1>Register To Join Chat Community</h1>
            <form className="form-fields">
                <TextField  type="text" label="First Name" value={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                <TextField type="text" label="Last Name" value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                <TextField type="email" label="Email" value={email} placeholder="exampel@gmail.com" onChange={e => setEmail(e.target.value)} />
                <TextField type="password" label="Password" value={password} placeholder="P@$$w0rd" onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" onClick={registerUserHandler}>Submit</Button>
            </form>
            <div className="error">
            {error && error}
            </div>
        </div>
    )
}

export default Signup;