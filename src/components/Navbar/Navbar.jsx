import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className='topnav'>
      <div>
        <a className='active' href='#home'>
          Home
        </a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>

      <div className='flexRow'>
        <p className='userName'>Baraa Nazar</p>
        <img
          src='https://media.licdn.com/dms/image/D4D03AQE6Oa8VrKUOyg/profile-displayphoto-shrink_400_400/0/1668949272002?e=1692230400&v=beta&t=q8_zAlWlK2G1_lEX1S1RdNoh7EUKRvGX0ex9CNbX2Ck'
          alt='userImg'
          className='userImg'
        />
      </div>
    </div>
  );
}

export default Navbar;
