import React from 'react';

const Datepicker = ({ data, getData }) => {
  const OnFocus = (e) => {
    e.target.type = 'date';
  };

  const OnFocusTime = (e) => {
    e.target.type = 'time';
  };

  return (
    <div className="contact-form">
      <div className="header">Appointment Information</div>

      <div className="contact-form-labels">
        <input
          className="contact-form-input"
          name="date"
          autoComplete="off"
          onFocus={OnFocus}
          placeholder="Preffered Date*"
          value={data.date}
          onChange={getData}
        />
      </div>

      <div className="contact-form-labels">
        <input
          className="contact-form-input"
          name="time"
          autoComplete="off"
          onFocus={OnFocusTime}
          placeholder="Preffered Time* "
          value={data.time}
          onChange={getData}
          min="09:00"
          max="18:00"
          required
        />
      </div>
    </div>
  );
};

export default Datepicker;
