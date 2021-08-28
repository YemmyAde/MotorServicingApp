import React, { useState } from 'react';
import './css/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const logOut = () => {
    localStorage.removeItem('token');
  };
  const profileItems = [
    {
      title: 'Manage profile',
      cName: 'profile-link',
      path: '/profile/manage',
      icon: <i className="fa fa-cog icons" />,
    },

    {
      title: 'My cart',
      cName: 'profile-link',
      icon: <i className="fa fa-shopping-cart icons" />,
      path: '/profile/cart',
    },

    {
      title: 'Logout',
      cName: 'profile-link',
      path: '/login',
      onclick: logOut,
      icon: <i className="fa fa-sign-out icons" />,
    },
  ];
  return (
    <>
      <ul onClick={handleClick} className="profile-menu">
        {/* {profileItems.map((item, index) => {
          return ( */}
        <li>
          <Link
            className="profile-link"
            to="/login"
            onClick={() => {
              setClick(false);
              logOut();
            }}
          >
            <i className="fa fa-sign-out icons" /> Logout
          </Link>
        </li>

        {/* })} */}
      </ul>
    </>
  );
}

export default Profile;
