import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Newgame = () => {

    const containersRef = useRef([]);
      
        useEffect(() => {
          const handleMouseMove = (e, container) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let rotateY = -((x / container.clientWidth) * 2 - 1) * 20;
            let rotateX = (((y / container.clientHeight) * 2 - 1) * 20);
      
            container.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          };
      
          const handleMouseOut = (container) => {
            container.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
          };
      
          containersRef.current.forEach((container) => {
            if (container) {
              const mouseMoveListener = (e) => handleMouseMove(e, container);
              const mouseOutListener = () => handleMouseOut(container);
      
              container.addEventListener('mousemove', mouseMoveListener);
              container.addEventListener('mouseout', mouseOutListener);
      
              return () => {
                container.removeEventListener('mousemove', mouseMoveListener);
                container.removeEventListener('mouseout', mouseOutListener);
              };
            }
          });
        }, []);

  return (
    <>
    <section className="new-game" style={{width:"100%"}}>
        <div id="new-game">
            <h3 className="new-game-title">NEW GAME</h3>
            <ul className="new-game-list">
                
                <li className="contents">
                    <Link to="https://www.nintendo.co.kr/switch/banra/">
                        <div className="container"
                        ref={(el) => containersRef.current[0] = el}>
                            <div className="card"></div>
                        </div>
                    </Link>
                    <div className="new-game-text">
                        <h3>Luigi Mansion 2 HD</h3>
                        <p>루이지 맨션 2 HD</p>
                    </div> 
                </li>
                <li className="contents">
                    <Link to="https://www.nintendo.co.kr/switch/a9qda/">
                        <div className="container"
                        ref={(el) => containersRef.current[1] = el}>
                            <div className="card"></div>
                        </div>
                    </Link>
                    <div className="new-game-text">
                        <h3>Paper Mario The Thousand-year Door</h3>
                        <p>페이퍼 마리오 1000년의 문</p>
                    </div>
                </li>
                <li className="contents">
                    <Link to="https://www.nintendo.co.kr/switch/amjja/">
                        <div className="container"
                        ref={(el) => containersRef.current[2] = el}>
                            <div className="card"></div>
                        </div>
                    </Link>
                    <div className="new-game-text">
                        <h3>Princess Peach Showtiome!</h3>
                        <p>프린세스 피치 Showtime!</p>
                    </div>
                </li>
                <li className="contents">
                    <Link to="https://www.nintendo.co.kr/switch/a97pa/">
                        <div className="container"
                        ref={(el) => containersRef.current[3] = el}>
                            <div className="card"></div>
                        </div>
                    </Link>
                    <div className="new-game-text">
                        <h3>Mario vs Donkey Kong</h3>
                        <p>마리오 vs. 동키콩</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Newgame;