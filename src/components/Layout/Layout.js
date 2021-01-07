import React from 'react'
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav'
import "./Layout.css"
const Layout = (props) => {
    const auth = useSelector(state => state.auth);
    return (
        <div className="layout">
            <Nav userName={`${auth.user.firstName} ${auth.user.lastName}`}/>
            {props.children}
        </div>
    )
}

export default Layout
