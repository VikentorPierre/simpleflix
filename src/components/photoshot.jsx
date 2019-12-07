import React from 'react';
import '../css/home.css';
import '../css/photoshot.css';
const Photoshot = () => {
  return (
    <main className='main-content-container'>
      <section className='photoshot-sec'>
        <div className='content-h1-title'>
          <i class='fas fa-caret-right'></i> <h1> Photoshoot</h1>
        </div>
        <div className='grid-container'>
          <div className='photoshoot-pic-wrapper'>
            <img
              src='https://www.dropbox.com/s/ps8j2p6rlu5cprv/Hawk5.jpg?raw=1'
              className='photoshoot-pic'
              alt=' pic'
            />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img
              src='https://www.dropbox.com/s/ps8j2p6rlu5cprv/Hawk5.jpg?raw=1'
              src='https://www.dropbox.com/s/u4midsmfbfy1uj8/Hawk1.jpg?raw=1'
              className='photoshoot-pic'
              alt=' pic'
            />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img
              src='https://www.dropbox.com/s/lpcdp4v8b0c66k0/Hawk9.jpg?raw=1'
              className='photoshoot-pic'
              alt=' pic'
            />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img
              src='https://www.dropbox.com/s/01g64c4brbcwknc/Tb1.jpg?raw=1'
              className='photoshoot-pic'
              alt=' pic'
            />
          </div>

          <div className='photoshoot-pic-wrapper'>
            <img
              src='https://www.dropbox.com/s/0241imaqc0n6xi8/Tb4.jpg?raw=1'
              className='photoshoot-pic'
              alt=' pic'
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photoshot;
