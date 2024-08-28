import React, { useEffect, useState } from 'react';

const Visual = () => {
    // [ Sec 01 ]
    const fixedSlideWidth = 744; // 고정된 슬라이드 너비
    const [slideWidth, setSlideWidth] = useState(fixedSlideWidth);
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                const nintendoSlide = document.querySelector('.nintendo-slide');
                if (nintendoSlide) {
                    setSlideWidth(nintendoSlide.offsetWidth); // 슬라이드 실제 너비 사용
                }
            } else {
                setSlideWidth(fixedSlideWidth); // 고정된 너비 사용
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 컴포넌트 마운트 시 초기화

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const prevSlide = () => {
        let newPosition = currentPosition + slideWidth;
        if (Math.abs(newPosition) >= slideWidth * 5) {
            newPosition = 0;
        }
        setCurrentPosition(newPosition);
    };

    const nextSlide = () => {
        let newPosition = currentPosition - slideWidth;
        if (Math.abs(newPosition) >= slideWidth * 5) {
            newPosition = 0;
        }
        setCurrentPosition(newPosition);
    };

    return (
        <>
            <section className="visual" style={{ width: '100%' }}>
                <div id="visual">
                    <div className="nintendo">
                        <div className='nintendo-slide-button'>
                            <div className="slide-prev" onClick={prevSlide}></div>
                            <div className="slide-next" onClick={nextSlide}></div>
                        </div>
                        <div
                            className="nintendo-slide"
                            style={{
                                backgroundPosition: `${currentPosition}px 0px`,
                                transition: 'background-position 0.7s',
                            }}
                        ></div>
                    </div>
                </div>
                <img className="bg-orange" src="../public/image/Sec01/orange.png" />
            </section>
        </>
    );
};

export default Visual;
