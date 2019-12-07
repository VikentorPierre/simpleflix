import React from 'react';

import vid1 from '../../img/vid3.PNG';
const WorkCards = () => {
  return (
    <div className='grid-container'>
      <div>
        <a href='#'>
          <img src={vid1} alt='' />
          {/* <img src='' alt='' width='200px' /> */}
        </a>
      </div>
      <div>
        <h2>two</h2>
      </div>
      <div>
        <h2>three</h2>
      </div>
      <div>
        <h2> 4 </h2>
      </div>
      <div>
        <h2>5 </h2>
      </div>
      <div>
        <h2>one</h2>
      </div>
      <div>
        <h2>one</h2>
      </div>
    </div>
  );
};

export default WorkCards;
