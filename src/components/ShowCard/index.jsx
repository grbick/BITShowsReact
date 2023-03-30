import React from "react";
import "./showCard.scss";
import ShowInfo from "../ShowInfo";

const ShowCard = (props) => {
  return (
    <div className="showCard">
      <img src={props.show.image.medium} alt="" />
      <ShowInfo show={props.show} />
    </div>
  );
};

export default ShowCard;
