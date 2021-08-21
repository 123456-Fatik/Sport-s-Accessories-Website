
import React from 'react';
import Common from './Common';
import shirt from '../src/images/home.jpg';

const Home = ()=>{
  return (
   
    <Common 
    ImgSrc={shirt}
      Text={`We are dealing in all kinds of sport's accessories`}
      BtnText={'Shop Now'}
      BtnLink={'/service'}
    />
  )
};

export default Home;
