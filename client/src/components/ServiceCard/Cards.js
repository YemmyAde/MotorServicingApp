import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'
import image1 from '../images/carRepair.jpg'
import image2 from '../images/carFiz.jpeg'
import image3 from '../images/carRepair2.jpg'
import image4 from '../images/carRepair3.jpg'
import image5 from '../images/carRepair4.jpg'
import image6 from '../images/carRepair5.jpg'

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={image1}
                        bestValue = {true}
                        text="Most of the vehicles get damaged just because of maintenance"
                        label='Most popular'
                        path='/get-quote'
                        title='Performance Upgrades'  
                        />

                        <CardItem 
                        src={image2}
                        text="Most of the vehicles get damaged just because of maintenance"
                        // label='$100'
                        path='/get-quote'
                        title='Engine Diagnostics Entire'   
                        />

                        
                        <CardItem 
                        src={image3}
                        text="Most of the vehicles get damaged just because of maintenance"
                        // label='$100'
                        path='/get-quote'
                        title='Lube Vehicles Damaged'   
                        />
                    </ul>    

                        
                        <ul className="cards__items"> 

                        <CardItem 
                        src={image4}
                        text="Most of the vehicles get damaged just because of maintenance"
                        // label='$100'
                        path='/get-quote'
                        title='Computer Diagnostics'   
                        />

                        <CardItem 
                        src={image5}
                        text="Most of the vehicles get damaged just because of maintenance"
                        // label='$100'
                        path='/get-quote'
                        title='Anti Lock Brake Service'   
                        />

                        <CardItem 
                        src={image6}
                        bestValue = {true}
                        text="Most of the vehicles get damaged just because of maintenance"
                        label='Best Value'
                        path='/get-quote'
                        title='Air Conditioning Evac'   
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
