import React from 'react';
import './css/slider.css';

const VehicleForm = ({ data, getData }) => {
  return (
    <div className="contact-form">
      <div className="header">Vehicle Details</div>
      <form>
        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="vehicleBrand"
            autoComplete="off"
            value={data.vehicleBrand}
            onChange={getData}
            type="text"
            placeholder="Vehicle Brand *"
          />
        </div>

        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="vehicleMake"
            autoComplete="off"
            value={data.vehicleMake}
            type="text"
            onChange={getData}
            placeholder="Vehicle Make"
          />
        </div>

        <div className="contact-form-labels">
          <div class="slider-box">
            <p className="slider-label">Vehicle year:</p>
            <div className="slider-wrap">
              <input
                type="range"
                name="vehicleYear"
                max="2022"
                min="1990"
                value={data.vehicleYear}
                onChange={getData}
              />
              <p className="slider-year"> {data.vehicleYear} </p>
            </div>
          </div>
        </div>

        <textarea
          className="vehicle-form-additional"
          rows="5"
          cols="50"
          name="comment"
          placeholder="Additional comments"
        ></textarea>
      </form>
    </div>
  );
};

export default VehicleForm;
