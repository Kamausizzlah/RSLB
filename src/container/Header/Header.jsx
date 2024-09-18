import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the New Flavour'/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Self-actualization needs - realizing personal
        potential, self-fulfillment, seeking personal
        growth and peak experiences. A desire “to
        become everything one is capable of
        becoming
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={ images.Nyama } alt='header_img' />

    </div>
  </div>
);

export default Header;
