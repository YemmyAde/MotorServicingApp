import React from 'react'
import './css/input.css'

const Input = ({...props}) => {
    return (
        <input className="form-input" {...props}/>
    )
}

export default Input
