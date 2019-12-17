import React from 'react';
import '../css/home.css';
import '../css/photoshot.css';

import img03 from '../img/img03.jpg';
import img33 from '../img/img33.jpg';
import img333 from '../img/img333.jpg';

import img01 from '../img/img01.jpg';
import img11 from '../img/img11.jpg';
import img02 from '../img/img02.jpg';
const Photoshot = () => {
  return (
    <main className='main-content-container'>
      <section className='photoshot-sec'>
        <div className='content-h1-title'>
          <i class='fas fa-caret-right'></i> <h1> Photoshoot</h1>
        </div>
        <div className='grid-container'>
          <div className='photoshoot-pic-wrapper'>
            <img src={img03} className='photoshoot-pic' alt=' pic' />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img src={img33} className='photoshoot-pic' alt=' pic' />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img src={img333} className='photoshoot-pic' alt=' pic' />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img src={img01} className='photoshoot-pic' alt=' pic' />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img src={img11} className='photoshoot-pic' alt=' pic' />
          </div>
          <div className='photoshoot-pic-wrapper'>
            <img src={img02} className='photoshoot-pic' alt=' pic' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photoshot;
