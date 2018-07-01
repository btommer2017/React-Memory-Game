import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className= "checkId img-container" onClick={() => props.idChecker(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    
    </div>

  </div>
);

export default FriendCard;
