
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './styles.css';

const Plusmobile = () => {
  return (
    <>
    <section className="moreservice">
        <div id="moreservice">
            <h3>추가 팩 가입 시</h3>
            <div
            style={{
              padding:"2rem 0",
            }}
            >
              <Swiper
                style={{transform: "rotate(-6deg)",overflow:"unset"}}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                // autoplay={{
                //   delay: 4000,
                //   disableOnInteraction: false,
                // }}
                // loop={true}
                // modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='slide-container'>
                    <img src="/image/Sec06/img_recruit_slide_01.png" alt="닌텐도 64 이미지"/>
                    <span>Nintendo 64™ Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_02.png" alt="게임보이 이미지"/>
                    <span>Game Boy Advance Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_03.png" alt="세가 메가드라이브 이미지"/>
                    <span>SEGA Mega Drive Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_04.png" alt="모여봐요 동물의 숲 해피 홈 파라다이스 이미지"/>
                    <span>모여봐요 동물의 숲 해피 홈 파라다이스</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_05.png" alt="스플래툰 2 Octo Expansion 이미지"/>
                    <span>스플래툰 2 Octo Expansion</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_06.png" alt="마리오 카트 8 디럭스 부스터 코스 패스 이미지"/>
                    <span>마리오 카트 8 디럭스 부스터 코스 패스</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="/image/Sec06/img_recruit_slide_01.png" alt="닌텐도 64 이미지"/>
                    <span>Nintendo 64™ Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_02.png" alt="게임보이 이미지"/>
                    <span>Game Boy Advance Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_03.png" alt="세가 메가드라이브 이미지"/>
                    <span>SEGA Mega Drive Nintendo Switch Online</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_04.png" alt="모여봐요 동물의 숲 해피 홈 파라다이스 이미지"/>
                    <span>모여봐요 동물의 숲 해피 홈 파라다이스</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_05.png" alt="스플래툰 2 Octo Expansion 이미지"/>
                    <span>스플래툰 2 Octo Expansion</span>
                </SwiperSlide>
                <SwiperSlide className='slide-container'>
                    <img src="image/Sec06/img_recruit_slide_06.png" alt="마리오 카트 8 디럭스 부스터 코스 패스 이미지"/>
                    <span>마리오 카트 8 디럭스 부스터 코스 패스</span>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </section>
    </>
      
  )
}

export default Plusmobile;