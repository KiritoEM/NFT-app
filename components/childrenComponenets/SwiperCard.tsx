import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITrendingProps {
  cover: string;
  userImage: string;
  userName: string;
  title: string;
  subtitle: string;
  ethValue: string;
  heartCount: number;
}

const SwiperCard = (props: ITrendingProps): JSX.Element => {
  const {
    cover,
    userImage,
    userName,
    title,
    subtitle,
    ethValue,
    heartCount,
  } = props;

  return (
    <div className="box">
      <div className="box__cover">
        <img src={cover} alt="" />
      </div>

      <div className="box__content">
        <div className="user">
          <img src={userImage} alt="" />
          <p>{userName}</p>
        </div>
        <h5>{title}</h5>
        <p className="subtitle">{subtitle}</p>

        <div className="card__items d-flex">
          <div className="text">{ethValue}</div>
          <div className="heart">
            <p>
              <FontAwesomeIcon icon={faHeart} /> {heartCount}
            </p>
          </div>
        </div>

        <div className="button">
          <button className="btn">Collect Now</button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
