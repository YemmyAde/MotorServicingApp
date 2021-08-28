import React from 'react'
import TeamCard from './TeamCard';
import pfp from '../images/pfp.jpeg'
import './css/teamCard.css'

const Team = () => {
    return (
        <div className='cards'>
            <div className="team-container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <TeamCard 
                        src={pfp}
                        text="Team Leader"
                        title='Yemisi'  
                        />

                        <TeamCard 
                        src={pfp}
                        text="Designer"
                        title='Tobi'   
                        />
                        
                        <TeamCard 
                        src={pfp}
                        text="Backend"
                        title='James'   
                        />
                    </ul>    

                        
                    <ul className="cards__items"> 

                        <TeamCard 
                        src={pfp}
                        text="Designer"
                        title='Abdullah'  
                        />

                        <TeamCard 
                        src={pfp}
                        text="Designer"
                        title='Mildred'   
                        />

                        <TeamCard 
                        src={pfp}
                        text="Backend"
                        title='YK'   
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team
