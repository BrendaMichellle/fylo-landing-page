import React from 'react';
import Heroimg from '../images/illustration-intro.png';
import { Button } from '../components/Button.style';

function Hero () {
  return (
    <div className="hero__section">
      <img src={Heroimg} alt="" className="hero__img"/>
      <h1 className="hero__CTA">All your files in one secure location, accessible anywhere.</h1>
      <p className="hero__desc">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
      <Button>Get Started</Button>
    </div>
  )
}

export default Hero