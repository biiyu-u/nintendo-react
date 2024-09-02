import React, { useEffect, useState } from 'react';

const Visual = () => {
    const fixedSlideWidth = 744;
    const [slideWidth, setSlideWidth] = useState(fixedSlideWidth);
    const [currentPosition, setCurrentPosition] = useState(0);

    const links = [
        'https://www.nintendo.co.kr/switch/amjja/',
        'https://www.nintendo.co.kr/switch/aqmxa/',
        'https://www.nintendo.co.kr/switch/aabpa/',
        'https://www.nintendo.co.kr/zelda/totk/',
        'https://www.nintendo.co.kr/switch/as8sa/',
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                const nintendoSlide = document.querySelector('.nintendo-slide');
                if (nintendoSlide) {
                    setSlideWidth(nintendoSlide.offsetWidth);
                }
            } else {
                setSlideWidth(fixedSlideWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(autoSlide);
        };
    }, [currentPosition, slideWidth]);

    const prevSlide = () => {
        let newPosition = currentPosition + slideWidth;
        if (newPosition > 0) {
            newPosition = -(slideWidth * (links.length - 1));
        }
        setCurrentPosition(newPosition);
    };

    const nextSlide = () => {
        let newPosition = currentPosition - slideWidth;
        if (Math.abs(newPosition) >= slideWidth * links.length) {
            newPosition = 0;
        }
        setCurrentPosition(newPosition);
    };

    const currentIndex = Math.abs(currentPosition / slideWidth) % links.length;
    const currentLink = links[currentIndex];

    return (
        <>
            <section className="visual" style={{ width: '100%' }}>
                <div id="visual">
                    <div className="nintendo">
                        <div className="nintendo-slide-button">
                            <div className="slide-prev" onClick={prevSlide}></div>
                            <div className="slide-next" onClick={nextSlide}></div>
                        </div>
                        <a href={currentLink} target="_blank" rel="noopener noreferrer">
                            <div
                                className="nintendo-slide"
                                style={{
                                    backgroundPosition: `${currentPosition}px 0px`,
                                    transition: 'background-position 0.7s'
                                }}
                            ></div>
                        </a>
                    </div>
                </div>
                <div className="bg-orange"></div>
            </section>
        </>
    );
};

export default Visual;
