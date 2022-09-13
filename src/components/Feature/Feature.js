import React from "react";
import './Feature.css';
import feature from "../../images/feature.png";
import fa from '../../images/f-1.png';
import fb from '../../images/f-2.png';
import fc from '../../images/f-3.png';
import fd from '../../images/f-4.png';
const Feature = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-sm-12 mb-3">
          <img className="img-fluid" src={feature} alt=""></img>
        </div>
        <div className="col-lg-8 col-sm-12">
            <p className="secondary">Our Hospital Feature</p>
            <p className="f-text">Make An Appointment Easy And Fast <br/> Services </p>
          <div className="row g-4">
            <div className="col-lg-2 me-lg-4 ms-lg-0 ms-sm-auto mx-auto col-sm-6 singleCard">
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <span>24 Hours Doctor Support</span>
                  <img src={fa} alt=""></img>
                </div>
                <span style={{color:"#575757"}}>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6  ms-lg-0 ms-sm-auto mx-auto singleCard">
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <span>Exclusive Supports</span>
                  <img src={fb} alt=""></img>
                </div>
                <span style={{color:"#575757"}}>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </span>
              </div>
            </div>
            <div className="col-lg-2 me-lg-4  ms-lg-0 ms-sm-auto mx-auto col-sm-6 singleCard">
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <span>Friendly Environment</span>
                  <img src={fc} alt=""></img>
                </div>
                <span style={{color:"#575757"}}>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </span>
              </div>
            </div>
            <div className="col-lg-2  ms-lg-0 ms-sm-auto mx-auto col-sm-6 singleCard">
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <span>24 Hours Nurse Support</span>
                  <img src={fd} alt=""></img>
                </div>
                <span style={{color:"#575757"}}>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
