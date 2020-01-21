import React, { useState } from 'react';
import img1 from '../img/vid2.PNG';
import vid1 from '../img/vid3.PNG';
import vid2 from '../img/vid4.PNG';
import vid3 from '../img/vid5.PNG';
import vid4 from '../img/image3.png';
import WorkCard from './widgets/workCards';
import '../css/home.css';

const playVid = (text, isOpen) => {
  console.log(` text: ${text} isOpen: ${isOpen}`);
  if (isOpen == true) {
    return (
      <div className='dialog-bg'>
        <h1> yes yes yes </h1>
      </div>
    );
  }
};

const MyCom = props => {
  return (
    <div className='dialog-bg' onClick={props.onClose}>
      <div className='dialog-center'>
        <iframe
          src={props.videoLink}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [vidLink, setVidLink] = useState(null);
  return (
    <main className='main-content-container'>
      <header className='header-home-sec'>
        <h1 className='header-home-sec-text'>
          The effect you have on others is the best currency there is
        </h1>
      </header>
      <section className='home-hero-video'>
        <img src={img1} alt='main work' />
        <i
          className='fab fa-youtube modal-btn'
          value='btn'
          onClick={() => {
            setIsOpen(!isOpen);
            setVidLink('https://www.youtube.com/embed/JWW9qUs0cfI');
          }}></i>
      </section>
      <section className='work-section' id='work-sec'>
        <header className='content-h1-title main-title'>
          <i className='fas fa-caret-right'></i>
          <span> Videos </span>
        </header>
        <div className='grid-container'>
          <div className='video-wrap'>
            <img src={vid1} alt='' className='video-vid' />
            <i
              className='fas fa-play modal-video-btn'
              value='btn'
              onClick={() => {
                setIsOpen(!isOpen);
                setVidLink('https://www.youtube.com/embed/1rGKfkZsV0k');
              }}></i>
          </div>
          <div className='video-wrap'>
            <img src={vid2} alt='' className='video-vid' />
            <i
              className='fas fa-play modal-video-btn'
              onClick={() => {
                setIsOpen(!isOpen);
                setVidLink('https://www.youtube.com/embed/2QESCJsMls4');
              }}></i>
          </div>
          <div className='video-wrap'>
            <img src={vid3} alt='' className='video-vid' />
            <i
              className='fas fa-play modal-video-btn'
              onClick={() => {
                setIsOpen(!isOpen);
                setVidLink('https://www.youtube.com/embed/GjPjAQkXP1U');
              }}></i>
          </div>
          <div className='video-wrap'>
            <img src={vid4} alt='' className='video-vid' />
            <i
              className='fas fa-play modal-video-btn'
              onClick={() => {
                setIsOpen(!isOpen);
                setVidLink('https://www.youtube.com/embed/mmr_g94Q-JM');
              }}></i>
          </div>
        </div>

        {/* <WorkCard /> */}
      </section>
      {isOpen == true && (
        <MyCom videoLink={vidLink} onClose={() => setIsOpen(!isOpen)} />
      )}
    </main>
  );
};

export default Home;

// https://www.youtube.com/embed/GjPjAQkXP1U
