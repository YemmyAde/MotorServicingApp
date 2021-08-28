import React from 'react'

const TeamCard = (props) => {
    return (
        <>
        <div className="teamDiv">
            <figure className="cards__item__pic-wrap ">
                <img src={props.src} alt="pfp" className="cards__item__img" />
            </figure>
            <div className="team-info">
                <h2 className="cards__item__text">
                    {props.title}
                </h2>

                <h5 className="teamText">
                        {props.text}
                </h5>
                <div class="socials">
                    <a href="#" className="teamContact">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="teamContact">
                        <i className="fa fa-folder"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default TeamCard
