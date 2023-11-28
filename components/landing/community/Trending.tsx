import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import dataHelper from "@/helper/dataHelper";
import SwiperCard from "@/components/childrenComponents/SwiperCard";
import { Pagination, Navigation, A11y } from "swiper/modules";
import SwiperButton from "@/components/childrenComponents/swiperButton";
// import { useSwiper } from "swiper/react";
import { MutableRefObject, useRef } from "react";

const Trending = (): JSX.Element => {
  const { landingTreding } = dataHelper();

  //fetch swiper reference
  const swiperRef: MutableRefObject<any> = useRef(null);
  

  const prevSwiper = () => {
    swiperRef.current.slidePrev();
  };

  const nextSwiper = () => {
    swiperRef.current.slideNext();
  };

  return (
    <section className="trending">
      <div className="trending__container">
        <div className="section-header">
          <h3>Trending <span>NTFs</span></h3>
        </div>
        <div className="section-content">
          <article className="swiper-container">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={"auto"}
              spaceBetween={20}
              modules={[Pagination, Navigation, A11y]}
              className="mySwiper"
            >
              {landingTreding.map((item, index) => (
                <SwiperSlide>
                  <SwiperCard key={index} {...item} />
                </SwiperSlide>
              ))}
              <SwiperButton prev={prevSwiper} next={nextSwiper} />
            </Swiper>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Trending;
