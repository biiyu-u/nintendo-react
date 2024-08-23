import React, { useEffect, useState } from 'react'

const Visual = () => {

    //[ Sec 01 ]
    const slideWidth = 744;
    const [currentPosition, setCurrentPosition] = useState(0);
    const[isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

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
    <section className="visual" style={{width:"100%"}}>
        <div id="visual">
            <div className="nintendo">
                <div className="slide-prev" onClick={prevSlide}></div>
                <div className="slide-next" onClick={nextSlide}></div>
                <div className="nintendo-slide"
                style={{ 
                    backgroundPosition: `${currentPosition}px 0px`, 
                    transition: 'background-position 0.7s' }}></div>
            </div>
            <video muted autoPlay loop>
            <source src="/video/프린세스 피치 Showtime!.mp4" type="video/mp4" />
        </video>
        </div>
        <img className="bg-orange" src="../public/image/Sec01/orange.png"/>
    </section>
    </>
  )
}

export default Visual;