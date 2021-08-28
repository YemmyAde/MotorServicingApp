import React from 'react';

const Checkout = ({ onsubmit }) => {
  return (
    <div className="wrap">
      <button className="contact-form-button" onClick={onsubmit}>
        Checkout
      </button>
      ;
    </div>
  );
};

export default Checkout;
