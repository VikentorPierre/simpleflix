import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo1.png';
import twitter from '../../img/Twitter.png';
import insta from '../../img/insta.png';
import '../../css/header.css';

const Header = () => {
  return (
    <header class='main-navbar'>
      <div class='navbar-bar'>
        <NavLink class='brand' to='/'>
          <img className='brand-logo' src={logo} alt='logo' />
          <div className='brand-title'>
            <span>Simpleflix</span> <span>Productions</span>
          </div>
        </NavLink>
        <nav class='nav-menu-wrap'>
          <ul class='nav-menu'>
            <li>
              <NavLink to='/'> Work </NavLink>
              {/* <a href='/#work-sec'> Work</a> */}
            </li>
            <li>
              <NavLink to='/photoshoot'> Photos </NavLink>
            </li>
            <li>
              <NavLink to='/about'> About </NavLink>
            </li>
          </ul>
        </nav>
        <div className='social-icon'>
          <a href='#'>
            <img className='test-img' src={twitter} alt='' />
          </a>
          <a href='https://www.instagram.com/rognbuda/' target='_blank'>
            <img className='test-img' src={insta} alt='' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
