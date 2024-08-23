import React from 'react'

const Bestgame = () => {
  return (
    <>
    <section className="best-game" style={{width:"100%"}}>
        <div id="best-game">
            <h3 className="best-game-title">BEST GAME</h3>
            <div className="best-game-wrapper">
                <div className="prevBtn"></div>
                <ul className="best-game-list">
                    <li className="best-left"></li>
                    <li className="best-main"></li>
                    <li className="best-right"></li>
                </ul>
                <div className="nextBtn"></div>
            </div>
            <div className="best-game-text">
                <h3>Super Mario Bros. Wonder</h3>
                <p>슈퍼 마리오브라더스 원더</p>
            </div>
        </div>
        <img className="bg-mario" src="../image/Sec02/bg_mario.png" alt="날고있는 마리오 이미지"/>
    </section>
    </>
  )
}

export default Bestgame;