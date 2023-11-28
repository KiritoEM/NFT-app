import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IsellerProps {
  img: string;
  name: string;
  ETH: string;
}

const SellerCard: React.FC<IsellerProps> = ({ img, name, ETH }) => {
  return (
    <div className="card-seller">
      <div className="card-seller__img">
        <img src={img} alt="" />
        <div className="badge">
          <FontAwesomeIcon icon={faCheck} className="icon" />
        </div>
      </div>

      <div className="card-seller__content">
        <h5>{name}</h5>
        <p>{ETH}</p>
      </div>
    </div>
  );
};

export default SellerCard;
