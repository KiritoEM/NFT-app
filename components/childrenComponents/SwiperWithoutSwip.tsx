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

const SwiperWithoutSwip = (props: ITrendingProps): JSX.Element => {
  const { cover, userImage, userName, title, subtitle, ethValue, heartCount } =
    props;

  return (
    <article className="box-top">
      <div className="box-top__cover">
        <img src={cover} alt="" />
      </div>

      <div className="box-top__content">
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
      </div>
    </article>
  );
};

export default SwiperWithoutSwip;
