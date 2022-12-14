import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg nav-bg fixed-top" >
  <div className="container">
    <Link className="navbar-brand fs-2" style={{fontWeight:"bold"}} to="/"> <span className='text-primary'>Doc</span><span className='secondary' >mic.</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/departments" >Departments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pages">Pages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">Contacts</Link>
        </li>
      </ul>
        <Link className="btn btn-primary" to="/contacts">Free Consultation</Link>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;