import React from 'react';
import './Logo.css'

export default () => {
    return (
        <div className="Logo-box">
            <img src={require("./github2.png")}  alt="Github Logo" className="Logo"/>
        </div>
    )
}