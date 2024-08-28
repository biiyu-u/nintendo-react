import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../style.css";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

const Bestslide = () => {
  const gameTitles = [
    {title: "Super Mario Bros. Wonder",
      description: "슈퍼 마리오브라더스 원더",},
    {title: "The Legend of Zelda: Tears of the Kingdom",
      description: "젤다의 전설 티어스 오브 더 킹덤",},
    {title: "Nintendo Switch Sports",
      description: "닌텐도 스위치 스포츠",},
    {title: "Mario Kart 8 Deluxe",
      description: "마리오카트 8 디럭스",},
    {title: "Splatoon 3",
      description: "스플래툰 3",},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bestgame" style={{ width: "100%" }}>
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
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src="../image/Sec02/sports.png" alt="Sports" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src="../image/Sec02/cart.png" alt="Cart" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src="../image/Sec02/splatoon.png" alt="Splatoon" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="slide-bottom">
        <div className="button-prev">
          <img src="../image/Sec02/prev_btn.png" alt="Previous" />
        </div>
        <div className="gametitle">
          <h3>{gameTitles[activeIndex].title}</h3>
          <p>{gameTitles[activeIndex].description}</p>
        </div>
        <div className="button-next">
          <img src="../image/Sec02/next_btn.png" alt="Next" />
        </div>
      </div>
    </section>
  );
};

export default Bestslide;
