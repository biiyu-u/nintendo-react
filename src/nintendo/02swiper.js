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
    {
      title: "Super Mario Bros. Wonder",
      description: "슈퍼 마리오브라더스 원더",
      link: "https://www.nintendo.co.kr/switch/aqmxa/"
    },
    {
      title: "The Legend of Zelda Tears of the Kingdom",
      description: "젤다의 전설 티어스 오브 더 킹덤",
      link: "https://www.nintendo.co.kr/zelda/totk/"
    },
    {
      title: "Nintendo Switch Sports",
      description: "닌텐도 스위치 스포츠",
      link:"https://www.nintendo.co.kr/switch/as8sa/"
    },
    {
      title: "Mario Kart 8 Deluxe",
      description: "마리오카트 8 디럭스",
      link:"https://www.nintendo.co.kr/switch/aabpa/"
    },
    {
      title: "Splatoon 3",
      description: "스플래툰 3",
      link:"https://www.nintendo.co.kr/switch/av5ja/"
    },
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
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              swiper.slides.forEach((slide) => {
                if (slide && slide.style) {
                  slide.style.opacity = 0;
                }
              });
              const currentSlide = swiper.slides[swiper.activeIndex];
              const prevSlide = swiper.slides[swiper.activeIndex - 1];
              const nextSlide = swiper.slides[swiper.activeIndex + 1];
            
              if (currentSlide && currentSlide.style) {
                currentSlide.style.opacity = 1;
              }
            
              if (prevSlide && prevSlide.style) {
                prevSlide.style.opacity = 1;
              }
            
              if (nextSlide && nextSlide.style) {
                nextSlide.style.opacity = 1;
              }
            }}
            className="tranding-slider"
            
          >
            {gameTitles.map((game, index) => (
              <SwiperSlide key={index} className="tranding-slide">
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <div className="tranding-slide-img">
                    <img src={`../image/Sec02/${game.title.toLowerCase().replace(/ /g, '')}.png`} alt={game.title} />
                  </div>
                </a>
              </SwiperSlide>
            ))}
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
      <img className="bg-mario" src="../image/Sec02/bg_mario.png" alt="날고있는 마리오 이미지"/>
    </section>
  );
};

export default Bestslide;
