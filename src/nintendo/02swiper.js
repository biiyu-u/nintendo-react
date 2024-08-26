import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Swiper 모듈을 개별적으로 가져오지 않고 직접 Swiper 컴포넌트에 옵션으로 설정
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

const Bestslide = () => {
  return (
    <section id="tranding">
      <div className="container">
        <h1 className="text-center section-heading">BEST GAME</h1>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]} // 여기서 플러그인들을 추가
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 30,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="tranding-slider"
        >
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="image/wonder.png" alt="Wonder" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="image/splatoon.png" alt="Splatoon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="image/zelda.png" alt="Zelda" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="image/cart.png" alt="Cart" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="image/sports.png" alt="Sports" />
            </div>
          </SwiperSlide>

          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <img src="image/prev_btn.png" alt="Previous" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src="image/next_btn.png" alt="Next" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Bestslide;
