import { Avatar } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import "./Nav.css"
const Nav = (props) => {
    
    const renderNav = ()=>{
        if(!localStorage.getItem('token')){
            return(
                <div className="Navlinks">
                    <NavLink  to="/login" className="btn btn__login"><PersonIcon/> LogIn</NavLink>
                    <NavLink  to="/signup"><PersonAddIcon/>  Signup</NavLink>
                </div>
            )
        }else{
            return (<div className="profile">
            <Avatar src={''} /> 
            <h4>{props.userName}</h4>
            </div>);
        }
    }
    return (
        <div className="nav">
            {renderNav()}
        </div>
    )
}

export default Nav
