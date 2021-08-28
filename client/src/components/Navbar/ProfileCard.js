import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import Profile from './Profile' 

const ProfileCard = ({userN}) => {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (dropdown) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }        
    };


    const onDocument = () =>{
        setDropdown(false);
    }
    
    
    
    return (
        <>
            <Link className ={window.innerWidth < 960 ? "textBar" : "profile-item"}
                onClick={onMouseEnter}
                onMouseLeave={onDocument}
            >
                Hi {userN} <i className='fas fa-caret-down' />            
                {dropdown && <Profile />}
            </Link>
        </>
    )
}

export default ProfileCard
