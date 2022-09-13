import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import grp from '../../images/Group3.png';
import { GrStatusGood } from "@react-icons/all-files/gr/GrStatusGood";
const Hero = () => {
  return (
    <div className="container d-sm-block d-lg-flex my-5 align-items-center justify-content-center mx-auto">
      <div className="">
        <h1 className="hero-h1">
          Your <span className="text-primary">Health</span> Is Our <br />
          Top
          <span className="secondary"> Priority</span>
        </h1>
        <span>
          There are many variations of passages of lpsum <br /> available, but
          the majority hae suffered.
        </span>
        <br />
        <Link className="btn btn-primary mt-4" to="/contacts">
          Meet Our Specialist
        </Link>
        <div className="d-flex flex-sm-rom ">
          <div className="m-lg-4 hero-card">
            <h4 className="secondary text-center">262k+</h4>
            <span>Recovered Patients</span>
          </div>
          <div className="m-lg-4 hero-card">
            <h4 className="secondary text-center">96%</h4>
            <span>Satisfaction Rate</span>
          </div>
          <div className="m-lg-4 hero-card">
            <h4 className="secondary text-center">86+</h4>
            <span>Expert Doctors</span>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-2">
          <div className="checkup">
            <h6>
              <GrStatusGood className="icon" />
            </h6>
            <h6>Regular Checkup</h6>
          </div>
          <div className="doctor">
            <div>
              <p>Meet Our Doctors</p>
              <img src={grp} alt=""></img> 
              <div className="doctor-first-bg mt-1"></div>
              <div className="doctor-second-bg mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
