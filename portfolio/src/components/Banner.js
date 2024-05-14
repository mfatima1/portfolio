import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Banner.css';

const Banner = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #87C4FF, #9B83DF, #B554B1)'
      };
    
  return (
    <div>
      <h1 className='name'>Hi I'm Maliha!</h1>
      <h1 className='header'> I'm a {' '}
        <Typewriter
          words={['CS Student', 'Frontend Developer', 'Cat Mom']}
          loop
          typeSpeed={120}
          deleteSpeed={80}
        />
      </h1>
  
    </div>
  );
};

export default Banner;
