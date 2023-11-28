import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Iactions {
  prev: () => void;
  next: () => void;
}

const SwiperButton: React.FC<Iactions> = ({ prev, next }): JSX.Element => {
  return (
    <div className="swiper-button">
      <div className="btn-prev" onClick={prev}>
        <button className="btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="btn-next" onClick={next}>
        <button className="btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SwiperButton;
