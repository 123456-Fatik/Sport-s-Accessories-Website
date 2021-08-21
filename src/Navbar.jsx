import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>
        

         
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid menu">
    <NavLink className="navbar-brand mx-5" to="/"><span className='menu'><strong >KHAN </strong>Sports.</span></NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName='nav' className="nav-link active " aria-current="page"  to="/"><span className='menu'>Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='nav' className="nav-link" to="/service"><span className='menu'>Service</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='nav' className="nav-link" to="/about"><span className='menu'>About</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='nav' className="nav-link" to="/contact"><span className='menu'>Contact</span></NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
 
        </>
    )
};

export default Navbar;
