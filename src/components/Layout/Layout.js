import React from 'react'
import Nav from '../Nav/Nav'
import "./Layout.css"
const Layout = (props) => {
    return (
        <div className="layout">
            <Nav/>
            {props.children}
        </div>
    )
}

export default Layout
