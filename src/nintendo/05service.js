import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useEffect(() => {
    const handleResize = () => {
      const listItems = document.querySelectorAll('.service-list li');

      listItems.forEach((item) => {
        const img = item.querySelector('img');
        if (window.innerWidth > 1200) {
          item.addEventListener('mouseenter', () => {
            gsap.to(img, {
              y: -300,
              duration: 1,
              ease: 'power2.out',
            });
          });
        } else {
          item.removeEventListener('mouseenter', () => {});
        }
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="service" style={{ width: "100%" }}>
        <div id="service">
          <h3 className="service-title">기본 서비스</h3>
          <ul className="service-list">
            <li>
              <p>온라인 플레이</p>
              <img src="image/Sec05/mario&luigi.png" alt="마리오와 루이지 이미지" />
            </li>
            <li>
              <p>저장 데이터 맡기기</p>
              <img src="image/Sec05/cloud.png" alt="구름 이미지" />
            </li>
            <li>
              <p>NES™ & Super NES™ & Game Boy™</p>
              <img src="image/Sec05/gameboy.png" alt="게임보이 이미지" />
            </li>
            <li>
              <p>스마트폰용 앱</p>
              <img src="image/Sec05/mushroom.png" alt="버섯 이미지" />
            </li>
            <li>
              <p>가입자 한정 특전</p>
              <img src="image/Sec05/box.png" alt="상자 이미지" />
            </li>
          </ul>
        </div>
        <img className="bg-kirby" src="image/Sec05/bg_kirby.png" alt="워프스타를 타고 있는 커비 이미지" />
        <img className='plusimg'
          style={{
            marginTop: "200px",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)"
          }} src='image/Sec06/plus.png' />
      </section>
    </>
  )
}

export default Service;
