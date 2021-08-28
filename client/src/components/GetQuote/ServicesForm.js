import React from 'react';

const ServicesForm = ({ data, getData }) => {
  return (
    <div className="contact-form">
      <div className="header"> Select Services</div>

      <div className="check-wrap">
        <div className="contact-form-check">
          <input name="services1" type="checkbox" onChange={getData} />
          <label for="services">Service 1</label>
        </div>

        <div className="contact-form-check">
          <input name="services2" type="checkbox" onChange={getData} />
          <label for="services">Service 2</label>
        </div>
      </div>

      <div className="check-wrap">
        <div className="contact-form-check">
          <input name="services3" type="checkbox" onChange={getData} />
          <label htmlFor="services">Service 3</label>
        </div>

        <div className="contact-form-check">
          <input name="services4" type="checkbox" onChange={getData} />
          <label for="services">Service 4</label>
        </div>
      </div>

      <div className="check-wrap">
        <div className="contact-form-check">
          <input name="services5" type="checkbox" onChange={getData} />
          <label for="services">Service 5</label>
        </div>

        <div className="contact-form-check">
          <input name="services6" type="checkbox" onChange={getData} />
          <label for="services">Service 6</label>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm;
