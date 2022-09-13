import React from "react";
import "./SingleCard.css";
const SingleCard = ({ serial }) => {
  return (
    <div>
      <div className="banner">
        <div className="text">
          <p>David Jeams</p>
          <p>Pratient</p>
          <span style={{color:"#575757"}}>
            simply dummy text of the printing and typesetting <br/> industry. Lorem
            Ipsum has been the industry's standard <br/> dummy text ever since the
            1500s, when an unknown <br/> printer took a galley of type and scrambled
            it is a long <br/> established fact that a reader will be distracted by
            the <br/> readable content
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
