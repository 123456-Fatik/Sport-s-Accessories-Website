import React from 'react';
import { NavLink } from 'react-router-dom';

const Common= (props)=> {
    return (
        <>
        <section id="header" className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1 >
           Khan Sports.
        </h1>
        <h3 className='my-3'>{props.Text}</h3>
        <div className="mt-3">
        <NavLink className='btn btn-outline-primary' to={props.BtnLink} >{props.BtnText}</NavLink>
        </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 header-img">
        <img src={props.ImgSrc} className='img-fluid animated' alt="/" />
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Common;
