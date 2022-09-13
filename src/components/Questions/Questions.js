import React from "react";
import "./Questions.css";
import qu from "../../images/ques-L.png";
const Questions = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
            <span className="secondary">FAQ Questions</span>
            <p className="q-text">Get Your General Answer </p>
            <div className="w-50">
                <div className="d-flex align-items-center justify-content-between">
                <p className="me-4">Get Your General Answer</p>
                <p className="text-primary fs-4">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <p className="me-4">Will I always see my own doctor?</p>
                <p className="text-primary fs-4">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <p className="me-4">What is one Medical’s care?</p>
                <p className="text-primary fs-4">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <p className="me-4">What is evidence based medicine?</p>
                <p className="text-primary fs-4">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <p className="me-4">What is an academic medical center?</p>
                <p className="text-primary fs-4">+</p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-sm-12 ques-img">
          <div className="que-card p-2">
            <div className="d-flex align-items-center justify-content-start">
              <div className="light border  rounded-circle">
              <img
                className="mt-2 ms-2"
                width="25.56px"
                height="30px"
                src={qu}
                alt=""
              ></img>
              </div>
              <span className="ms-3">
                Get Solutions From <br /> Our Experts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
