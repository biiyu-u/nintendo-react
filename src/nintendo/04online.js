import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Online = () => {

    //[ Sec 04 ]
    gsap.registerPlugin(ScrollTrigger);
          
    const imgRef = useRef(null);
    const logoRef = useRef(null);
    const scrollTriggerRef = useRef(null);

    useEffect(() => {
        if (imgRef.current && logoRef.current) {
            let images = [
                "../image/Sec04/nintendo_OLED.png",
                "../image/Sec04/nintendo_splatoon.png",
                "../image/Sec04/nintendo_zelda.png"
            ];
        // 768px 이하
        const mobileImages = [
            "../image/Sec04/nintendo_OLED_768.png",
            "../image/Sec04/nintendo_splatoon_768.png",
            "../image/Sec04/nintendo_zelda_768.png"
        ];

        const updateImagesForScreenSize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                images = mobileImages;
            } else {
                images = [
                    "../image/Sec04/nintendo_OLED.png",
                    "../image/Sec04/nintendo_splatoon.png",
                    "../image/Sec04/nintendo_zelda.png"
                ];
            }
        };
        updateImagesForScreenSize();
        window.addEventListener("resize", updateImagesForScreenSize);

        let currentIndex = 0;
        
        const fadeOut = (element, onComplete) => {
            gsap.to(element, {
                duration: 0.3,
                opacity: 0.3,
                onComplete: onComplete,
            });
        };

        const fadeIn = (element) => {
            gsap.to(element, {
                duration: 0.3,
                opacity: 1,
            });
        };

    scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "#online",
        start: "top 20%",
        end: "bottom+=2500px top",
        pin: "#online",
        // markers: true,
        onUpdate: (self) => {
            if (imgRef.current) {
                let newIndex;
                if (self.progress > 0.66) {
                    newIndex = 2;
                } else if (self.progress > 0.33) {
                    newIndex = 1;
                } else {
                    newIndex = 0;
                }

                if (newIndex !== currentIndex) {
                    fadeOut(imgRef.current, () => {
                        currentIndex = newIndex;
                        imgRef.current.src = images[currentIndex];
                        fadeIn(imgRef.current);
                    });
                }
            }
        },
        scrub: true,
    });
}

        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
        };
    }, []);

  return (
    <>
    <section className="online" style={{width:"100%", position: "relative"}}>
        <div id="online">
            <img ref={logoRef} className="online-logo" src="../image/Sec04/online_logo.png"/>
            <img ref={imgRef} className="OLED" src="../image/Sec04/nintendo_OLED.png"/>
        </div>
        <img className="bg-star" src="image/Sec04/bg_star.png" alt="날고있는 별 이미지" />
    </section>
    </>
  )
}

export default Online;