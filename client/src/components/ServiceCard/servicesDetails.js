import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loader from '../images/loader.gif';
import CardItem from './CardItem';
import './css/Cards.css';
import servicesDetailsAsync from '../../redux/actions/servicesDetailsAction';


const ServicesDetails = () => {
    const {id} = useParams()
  const dispatch = useDispatch();

  const state = useSelector((state) => state.servicesDetails.data.data.service);
  const servicesDisplayTitle = state.title
  const servicesDetail = state.otherServices;
  const loading = state.isLoading;

  useEffect(() => {
    dispatch(servicesDetailsAsync(id));
 
  }, [id]);

  return (
    <div className="cards_flexItem">

      {loading ? (
        <img src={loader} alt="Loading..." />
      ) : (
       
        servicesDetail.map((item) => {
          const id = item._id;
          const title = item.title;
          const description = item.description;
          const img = item.otherServices_image_url;
          const pricing = item.pricing;
          return (
            <>
            
            <div className="cards" key={id}>
              <div className="cards__container">
                <div className="cards__wrapper">
                  <ul className="cards__items">
                    <CardItem
                      src={img}
                      text={description}
                      path={`/get-quote`}
                      title={title}
                      currency='#'
                      price = {pricing}
                    />
                  </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
    
  );
};




export default ServicesDetails;
