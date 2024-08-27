import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../style.css"

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

const Bestslide = () => {
  return (
    <section className="bestgame" style={{width:"100%"}}>
        <div id="bestgame">
      <h1 className="title">BEST GAME</h1>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
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
              <img src="../image/Sec02/wonder.png" alt="Wonder" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="../image/Sec02/zelda.png" alt="Zelda" />
              {/* <div className="gametitle">
                <h3>The Legend of Zelda Tears of the kingdom</h3>
                <p>젤다의 전설 티어스 오브 더 킹덤</p>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="../image/Sec02/sports.png" alt="Sports" />
              {/* <div className="gametitle">
                <h3>Nintendo Switch Sports</h3>
                <p>닌텐도 스위치 스포츠</p>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="../image/Sec02/cart.png" alt="Cart" />
              {/* <div className="gametitle">
                <h3>Mario Kart 8 Deluxe</h3>
                <p>마리오카트 8 디럭스</p>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="../image/Sec02/splatoon.png" alt="Splatoon" />
              {/* <div className="gametitle">
                <h3>Splatoon 3</h3>
                <p>스플래툰 3</p>
              </div> */}
            </div>
          </SwiperSlide>
          <div className="gametitle">
                <h3>Super Mario Bros. Wonder</h3>
                <p>슈퍼 마리오브라더스 원더</p>
          </div>
          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <img src="../image/Sec02/prev_btn.png" alt="Previous" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src="../image/Sec02/next_btn.png" alt="Next" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Bestslide;
