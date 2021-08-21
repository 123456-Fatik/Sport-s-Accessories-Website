import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

const Service = ()=>{
  return (
    
    <>
    <div className="my-5">
    <h1 className='text-center'>Khan's Sports.</h1>
</div>    
<div className="container-fluid mb-5">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className="row gy-4">
{
  Cdata.map((val,ind)=>{
    return(
    <Card 
    key={val.key}
    imgsrc={val.img}
    title={val.title}
    price={val.price}
    />
    )

  })
}
      </div>
    </div>
  </div>
</div>

    
   
  </>
  )
};

export default Service;