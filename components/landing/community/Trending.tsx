import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helper/dataHelper";
import SwiperCard from "@/components/childrenComponenets/SwiperCard";

const Trending = (): JSX.Element => {
  const { landingTreding } = dataHelper();
  return (
    <section className="trending">
      <div className="trending__container">
        <div className="section-header">
          <h2>Trending NTFs</h2>
        </div>
        <div className="section-content">
          <article className="swiper-container">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              keyboard={true}
              className="mySwiper"
            >
              {landingTreding.map((item, index) => (
                <SwiperSlide>
                  <SwiperCard key={index} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
        </div>
        œ
      </div>
    </section>
  );
};

export default Trending;
