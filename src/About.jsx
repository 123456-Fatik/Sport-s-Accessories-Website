
import React from 'react';
import Common from './Common';
import ball from '../src/images/ball.jpg'

const About = ()=>{

  return (
  
    <>
    
    <Common 
    ImgSrc={ball}
      Text={`Khan Sports is one of the most famous sports brand all around the world which deals in all kinds of sports accessories. You can visit our shop in Karachi or you can order us online. `}
      BtnText={'Contact Now'}
      BtnLink='/contact'
    /></>
  )
};

export default About;
