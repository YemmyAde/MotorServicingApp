import React from 'react';

const ContactForm = ({ data, getData }) => {
  return (
    <div className="contact-form">
      <div className="header">Contact Details</div>
      <form>
        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="fullName"
            value={data.fullName}
            onChange={getData}
            autoComplete="off"
            type="text"
            placeholder="Your Full Name *"
          />
        </div>

        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="email"
            autoComplete="off"
            value={data.email}
            onChange={getData}
            type="email"
            placeholder="Your Email *"
          />
        </div>

        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={getData}
            autoComplete="off"
            type="tel"
            placeholder="Your Phone *"
          />
        </div>

        <div className="contact-form-labels">
          <input
            className="contact-form-input"
            name="address"
            value={data.address}
            onChange={getData}
            autoComplete="off"
            type="text"
            placeholder="Your Home Address *"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
