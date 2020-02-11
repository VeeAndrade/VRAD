import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Greeting.css';

const Greeting = ({ user, purpose, userFavorites }) => {
  if(!user || !purpose) {
    return ''
  } else {
    return(
      <article className='user-info'>
        <section className='heading-container-wrapper'>
          <NavLink className='favorites-nav-link' to='/favorites'>You have {userFavorites.length} Favorites</NavLink>
          <NavLink className='signout-btn' to='/'>Signout</NavLink>
        </section>
        <p>
          Hello, {user}. You've chosen {purpose} as your
          reason for being here!
        </p>
      </article>
    )}
  }

  Greeting.propTypes = {
    user: PropTypes.string,
    purpose: PropTypes.string,
    userFavorites: PropTypes.array
  }

export default Greeting;
