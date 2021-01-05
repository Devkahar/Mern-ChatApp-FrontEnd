import React from 'react'
import "./Spinner.css"
const Spinner = () => {
    console.log('====================================');
    console.log("Spinner");
    console.log('====================================');
    return (
        <div className="spinner">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner
