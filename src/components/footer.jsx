import React from 'react';
import '../css/footer.css';
import twitter from '../img/Twitter.png';
import insta from '../img/insta.png';
import mail from '../img/mail.png';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='footer-wrap'>
        <span className='site-copyright'>
          &copy; Copyright 2020, Simpleflix Productions
        </span>
        <div className='footer-social-icon'>
          <a href='#'>
            <img className='test-img' src={twitter} alt='' />
          </a>
          <a href='https://www.instagram.com/rognbuda/' target='_blank'>
            <img className='test-img' src={insta} alt='' />
          </a>
          <a href='#'>
            <img className='test-img' src={mail} alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
