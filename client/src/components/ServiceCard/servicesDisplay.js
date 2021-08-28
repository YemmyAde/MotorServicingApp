import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import servicesAsync from '../../redux/actions/servicesAction';
import loader from '../images/loader.gif';
import CardItem from './CardItem';
import './css/Cards.css';

const Services = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.services);
  const servicesDisplay = state.data.data.services;
  const loading = state.isLoading;

  useEffect(() => {
    dispatch(servicesAsync());
  }, []);

  return (
    <div className="card_servicesDisplay">
      {loading ? (
        <img src={loader} alt="Loading..." />
      ) : (
        servicesDisplay.map((item) => {
          const id = item._id;
          const title = item.title;
          const img = item.services_image_url;
          return (
            <div className="card" key={id}>
              < Link to={`/services/${id}`}>
                  <img src={img} alt="" className="card_images"/>
                  <h2 className="card_text2"> {title}</h2>
                      {/* path={`/services/${id}`} */}    
             </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Services;
