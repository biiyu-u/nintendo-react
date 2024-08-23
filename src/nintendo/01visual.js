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
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1200);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            {isSmallScreen && (
                    <div className="video-container" style={{ marginTop: '50px', textAlign: 'center' }}>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://youtu.be/JEPvt1_DjmE?si=M5ZIy0IJjMUYgYLx"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
        </div>
        <img className="bg-orange" src="../public/image/Sec01/orange.png"/>
    </section>
    </>
  )
}

export default Visual;