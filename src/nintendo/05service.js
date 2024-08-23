import React from 'react'

const Service = () => {
  return (
    <>
    <section className="service" style={{width: "100%"}}>
        <div id="service">
            <h3 className="service-title">기본 서비스</h3>
            <ul className="service-list">
                <li>
                    <p>온라인 플레이</p>
                    <img src="image/Sec05/mario&luigi.png" alt="마리오와 루이지 이미지" />
                </li>
                <li>
                    <p>저장 데이터 맡기기</p>
                    <img src="image/Sec05/cloud.png" alt="김수한무 이미지" />
                </li>
                <li>
                    <p>NES™ & Super NES™  & Game Boy™</p>
                    <img src="image/Sec05/gameboy.png" alt="게임보이 이미지" />
                </li>
                <li>
                    <p>스마트폰용 앱</p>
                    <img src="image/Sec05/mushroom.png" alt="키노피오 이미지" />
                </li>
                <li>
                    <p>가입자 한정 특전</p>
                    <img src="image/Sec05/box.png" alt="상자 이미지"/>
                </li>
            </ul>
        </div>
        <img className="bg-kirby" src="image/Sec05/bg_kirby.png" alt="워프스타를 타고있는 커비 이미지"/>
    </section>
    </>
  )
}

export default Service