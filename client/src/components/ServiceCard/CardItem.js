import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <Link className="cards__item__link" to={props.path}>
                <figure className={props.bestValue ? "cards__item__pic-wrap bestValue":"cards__item__pic-wrap "} data-category={props.label}>
                    <img src={props.src} alt="car_pic" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">

                    <h2 className="cards__item__title">
                        {props.title}
                    </h2>

                    <h5 className="cards__item__text2">
                        {props.text}
                    </h5>

                    <h4 class="plan-price">
                        <sup class="currency">{props.currency} </sup>
                        <strong>{props.price} </strong>
                    </h4>

                    <h4 class="plan-price">
                        <sup class="currency"> </sup>
                        <strong> </strong>
                    </h4>
                    
                </div>
            </Link>
        </>
    )
}

export default CardItem
