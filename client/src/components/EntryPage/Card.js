import React from 'react'
import './css/card.css'

const Card = ({children}) => {
    return (
        <div className="entryCard">
            {children}
        </div>
    )
}

export default Card
