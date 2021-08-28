import React from 'react';
import './css/Button.css';
import { Link } from 'react-router-dom';

export function Button({text}) {
    return (
        <Link to='login'>
            <button className="btn">
                {text}
            </button>
        </Link>
    )
}
