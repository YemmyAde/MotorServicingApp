import React from 'react'
import './css/button.css'
const Button = ({children,...props}) => {
    return (
        <button className= "submit-btn" {...props} >
            {children}
        </button>
    )
}

export default Button
