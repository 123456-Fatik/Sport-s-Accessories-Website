import React from 'react';
import { NavLink } from 'react-router-dom';
import '../src/images/baadminton.jpg';
import '../src/images/ball.jpg';
import '../src/images/basketball.jpg';
import '../src/images/bat.jpg';
import '../src/images/football.jpg';
import '../src/images/gloves.jpg';
import '../src/images/helmet.jpg';
import '../src/images/pads.jpg';



const Card=(props)=> {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card" style={{width: '18rem'}}>
    <img src={props.imgsrc} className="card-img-top" alt="not found"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.price}</p>
      <NavLink to="a" className="btn btn-primary">Buy Now</NavLink>
    </div>
  </div>
        </div>
    )
}

export default Card
