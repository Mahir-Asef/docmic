import React from "react";
import "./Experiences.css";
import experiences from "../../images/experiences.png";
const Experiences = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <p className="secondary">16+ Years Experiences </p>
          <p className="exp-text">
            We Are Always ensure Best Medical Treatment For Your Health
          </p>
          <span className="text-justifty">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look lik
          </span>
        </div>
        <div className="col-lg-6 col-sm-12 text-center ">
          <img className="img-fluid img" src={experiences} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
