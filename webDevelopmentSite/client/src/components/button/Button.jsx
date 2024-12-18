import React from 'react';
import "./Button.css";

function Button( {label, onClick, type = "button", styleClass}) {
    return (
        <button className={styleClass} type ={type} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;