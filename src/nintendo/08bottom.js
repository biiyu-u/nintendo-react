import React from 'react'
import { Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <>
    <section className="bottom" style={{width: "100%"}}>
        <div id="bottom">
            <div className="bottom-logo">
                <Link to="index.html" className="logo"></Link>
            </div>
            <div className="bottom-menu-wrapper">
                <div className="bottom-menu">
                    <ul className="bottom-menu-list">
                        <li>
                            <h3>본체 / amiibo</h3>
                            <ul>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/hardware/index.html">Nintendo Switch</Link>
                                </li>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/amiibo/index.html">amiibo</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>소프트웨어</h3>
                            <ul>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/software/switch">Nintendo Switch 소프트웨어</Link>
                                </li>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/schedule">소프트웨어 발매 스케쥴</Link>
                                </li>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/software/smartphone/">스마트폰용 앱</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>고객지원</h3>
                            <ul>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/support/switch/index.html">Nintendo Switch</Link>
                                </li>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/3DS/customer/index.html">Nintendo 3DS</Link>
                                </li>
                                <li>
                                    <Link to="https://support-kr.nintendo.com/hc/ko/requests/new">온라인 고객 상담</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>한국닌텐도</h3>
                            <ul>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/corporate/kr/kr01.html">회사개요</Link>
                                </li>
                                <li>
                                    <Link to="https://www.nintendo.co.kr/corporate/kr/kr04.html">찾아오시는 길</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="bottom-service-wrapper">
                    <div className="bottom-sns">
                        <ul>
                            <li>
                                <Link to="https://www.youtube.com/@Nintendo_KR">
                                    <img src="image/bottom/youtube.png" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://story.kakao.com/ch/nintendokorea">
                                    <img src="image/bottom/kakaostory.png" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/Nintendo.kr">
                                    <img src="image/bottom/facebook.png" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://x.com/Nintendo_Korea">
                                    <img src="image/bottom/x.png" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://pf.kakao.com/_Xxiwzxj">
                                    <img src="image/bottom/channel.png" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-service">
                        <ul>
                            <li>
                                <Link to="https://www.nintendo.co.kr/amiibo">
                                    <img src="image/bottom/amiibo.png" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://my.nintendo.com">
                                    <img src="image/bottom/myNintendo.png" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Bottom