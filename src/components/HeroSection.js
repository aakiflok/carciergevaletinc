import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='img-hero' src='/images/home-2.jpg'  alt="" />
      <section class='hero-header-text'>
        <h1>Reliable Valet: Quality Service, Low Rates</h1> 
        <p>Experience Seamless Valet Services Tailored to Your Convenience. Leave the Parking to Us!</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Contact Us <i className='far fa-play-circle' />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
