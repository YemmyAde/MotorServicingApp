import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="NotFound text-center">
      <h2>Error 404</h2>
      <h3>Sorry, page not found!</h3>
      <br></br>
      <h5>
        Go back to <a href="/">Motorify</a>
      </h5>
    </div>
  );
}
