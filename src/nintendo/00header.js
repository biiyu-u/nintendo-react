import { Link } from 'react-router-dom';
import React, { useState } from 'react'

const Header = () => {

    // 드롭다운
    const [openDropdown, setOpenDropdown] = useState(null);
      
    const closeAllDropdowns = () => {
      setOpenDropdown(null);
    };
  
    const handleMouseEnter = (dropdown) => {
      setOpenDropdown(dropdown);
    };


  return (
    <>
    <div className="header" style={{width:"100%"}}>
        <div className="inner" style={{width:'1200px', margin:'0 auto'}}>
            <div className="">
                <Link to="index.html" className="logo"></Link>
            </div>
            <nav className="gnb">
                <ul className="menu">
                    <li className="dropdown-hardware"
                    onMouseEnter={() => handleMouseEnter('hardware')}
                    onMouseLeave={closeAllDropdowns}>
                        <p>본체 및 amiibo</p>
                        <div className="gNav-megadrop"
                        style={{
                            height: openDropdown === 'hardware' ? '276.31px' : '0px',
                            overflow: openDropdown === 'hardware' ? 'hidden' : 'hidden',
                            opacity: openDropdown === 'hardware' ? 1 : 0,
                            transition: 'height 0.5s ease, opacity 0.5s ease',
                        }}>
                            <div className="gNav-contentItem hardware"
                            style={{
                                display: openDropdown === 'hardware' ? 'block' : 'none',
                              }}>
                                <div className="gNav-body">
                                    <div className="gNav-body-upper">
                                        <Link to="https://www.nintendo.co.kr/hardware/">
                                            <img src="image/header/nav_switch_family.png" />
                                        </Link>
                                    </div>
                                    <div className="gNav-body-bottom">
                                        <div className="gNav-body-item amiibo">
                                            <Link to="https://www.nintendo.co.kr/amiibo/">
                                                <p className="thumb">
                                                    <img src="image/header/img_amiibo.jpg" />
                                                </p>
                                                <p className="text">amiibo</p>
                                            </Link>
                                        </div>
                                        <div className="gNav-body-item gamewatch">
                                            <Link to="https://www.nintendo.co.kr/hardware/gamewatch/zelda/">
                                                <p className="thumb">
                                                    <img src="image/header/img_gamewatch.jpg" />
                                                </p>
                                                <p className="text">게임&워치 젤다의 전설</p>
                                            </Link>
                                        </div>
                                        <div className="gNav-body-item amiibo">
                                            <Link to="https://www.pokemongoplusplus.com/ko/">
                                                <p className="thumb">
                                                    <img src="image/header/img_pokemongoplusplus.jpg" />
                                                </p>
                                                <p className="text">Pokémon GO Plus+</p>
                                            </Link>
                                        </div>
                                        <ul className="gNav-body-list">
                                            <li className="gNav-body-elements">
                                                <Link to="https://www.nintendo.co.kr/hardware/switch/compare/">
                                                    기능ㆍ특징을 비교
                                                </Link>
                                            </li>
                                            <li className="gNav-body-elements">
                                                <Link to="https://www.nintendo.co.kr/hardware/switch/accessories/">
                                                    주변기기
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-software"
                    onMouseEnter={() => handleMouseEnter('software')}
                    onMouseLeave={closeAllDropdowns}>
                        <p>소프트웨어</p>
                        <div className="gNav-megadrop"
                        style={{
                            height: openDropdown === 'software' ? '278.91px' : '0px',
                            overflow: openDropdown === 'software' ? 'hidden' : 'hidden',
                            opacity: openDropdown === 'software' ? 1 : 0,
                            transition: 'height 0.5s ease, opacity 0.5s ease',
                        }}>
                            <div className="gNav-contentItem software"
                            style={{
                                display: openDropdown === 'software' ? 'block' : 'none',
                              }}>
                                <div className="gNav-body">
                                    <div className="gNav-body-upper">
                                    <ul className="gNav-body-list">
                                    <li className="gNav-body-elements-switch">
                                        <Link to="https://www.nintendo.co.kr/software/switch" className="gNav-body-link">
                                            <div className="gNav-body-icon">
                                                <img src="image/header/nav_nintendo_logo.png" style={{width:"48.25px",height:"52.63px;"}}/>
                                                <p>Nintendo Switch</p>
                                                <p>소프트웨어</p>
                                            </div>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "140px", height:"144px"}} src="image/header/gheader-itemlist-img-switch-01.jpg" />
                                            </p>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "140px", height:"144px"}} src="image/header/gheader-itemlist-img-switch-02.jpg" />
                                            </p>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "140px", height:"144px"}} src="image/header/gheader-itemlist-img-switch-03.jpg" />
                                            </p>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "140px", height:"144px"}} src="image/header/gheader-itemlist-img-switch-04.jpg" />
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="gNav-body-elements-smartphone">
                                        <Link to="https://www.nintendo.co.kr/software/smartphone/" className="gNav-body-link">
                                            <div className="gNav-body-icon">
                                                <img src="image/header/nav_smartphone_icon.png" style={{width:"33.95px", height:"60px"}} />
                                                <p>스마트폰용 앱</p>
                                            </div>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "81px", height: "144px"}} src="image/header/gheader-itemlist-img-smartphone-01.jpg" />
                                            </p>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "81px", height: "144px"}} src="image/header/gheader-itemlist-img-smartphone-02.jpg" />
                                            </p>
                                            <p className="gNav-body-thumb">
                                                <img style={{width: "81px", height: "144px"}} src="image/header/gheader-itemlist-img-smartphone-03.jpg" />
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="gNav-body-bottom">
                                <Link to="https://store.nintendo.co.kr/nintendo-switch-online" className="thumb-online">
                                    <img src="../image/header/nintendo_online.png" style={{width: "112px", height: "38px"}} />
                                    <p className="text">Nintendo Switch Online</p>
                                </Link>
                                <ul className="gNav-body-list">
                                    <li className="gNav-body-elements">
                                        <Link to="https://www.nintendo.co.kr/software/switch?sftab=trial#section-now-on-sale">
                                            체험판을 즐길 수 있는 소프트웨어
                                        </Link>
                                    </li>
                                    <li className="gNav-body-elements">
                                        <Link to="https://www.nintendo.co.kr/schedule">
                                            소프트웨어 발매 스케줄
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-topic"
                    onMouseEnter={() => handleMouseEnter('topic')}
                    onMouseLeave={closeAllDropdowns}>
                        <p>뉴스 & 업데이트</p>
                        <div className="gNav-megadrop"
                        style={{
                            height: openDropdown === 'topic' ? '371.34px' : '0px',
                            overflow: openDropdown === 'topic' ? 'hidden' : 'hidden',
                            opacity: openDropdown === 'topic' ? 1 : 0,
                            transition: 'height 0.5s ease, opacity 0.5s ease',
                        }}>
                            <div className="gNav-contentItem topic"
                            style={{
                                display: openDropdown === 'topic' ? 'block' : 'none',}}>
                                <div className="gNav-body">
                                    <ul className="gNav-body-list">
                                        <li className="gNav-body-elements">
                                            <Link to="https://www.nintendo.co.kr/news/article/49030zqZcq32ZNizHvv3zA">
                                                <img src="../image/header/topics_banner_240613.jpg" style={{width:"226.41px", height:"127.34px"}} />
                                                <p>다 함께 신나게 즐길 수 있는 Nintendo Switch 파티 게임을 소개합니다.</p>
                                                <p className="status">
                                                    <span>뉴스</span>
                                                    / 
                                                    <span>2024.07.26</span>
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="gNav-body-elements">
                                            <Link to="https://www.nintendo.co.kr/news/article/28Jp71IrjDw2IDGvAtOiYh">
                                                <img src="../image/header/topics_banner_240723.jpg" style={{width:"226.41px",height:"127.34px"}} />
                                                <p>「모여봐요 동물의 숲 × 코엑스 아쿠아리움」 7월 29일(월) 오픈!</p>
                                                <p className="status">
                                                    <span>뉴스</span>
                                                    / 
                                                    <span>2024.07.24</span>
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="gNav-body-elements">
                                            <Link to="https://www.nintendo.co.kr/news/article/remlisq669gw78ScpkyFj">
                                                <img src="../image/header/topics_banner_1-100.jpg" style={{width:"226.41px", height:"127.34px"}} />
                                                <p>「Nintendo Switch Online」의 7일간 무료 체험을 배포! 『마리오 카트 8 디럭스』 온라인 대회에도 참가하고, 다양한 온라인 서비스도 이용할 수 있어요!</p>
                                                <p className="status">
                                                    <span>뉴스</span>
                                                    / 
                                                    <span>2024.07.19</span>
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="gNav-body-elements">
                                            <Link to="https://www.nintendo.co.kr/news/article/2jrFOAkgCTYwUKVfxRykfe">
                                                <img src="../image/header/topics_banner_820_461.jpg" style={{width: "226.41px", height:"127.34px"}} />
                                                <p>Joy-Con을 간편하게 충전. 「Joy-Con 충전 스탠드(2way)」가 10월 17일(목)에 발매됩니다. </p>
                                                <p className="status">
                                                    <span>뉴스</span>
                                                    / 
                                                    <span>2024.07.18</span>
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="gNav-body-elements">
                                            <Link to="https://www.nintendo.co.kr/news/article/3aDvepeZCCcuSf3XBSBOlM">
                                                <img src="../image/header/topics_banner_320x180.jpg" style={{width:"226.41px",height:"127.34px"}} />
                                                <p>『페이퍼 마리오 1000년의 문』의 모험에 도움을 주는 힌트 등이 적힌 「페이퍼 북」을 공개했습니다.</p>
                                                <p className="status">
                                                    <span>뉴스</span>
                                                    / 
                                                    <span>2024.07.04</span>
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gNav-body-bottom">
                                    <Link to="">News 목록</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="support">
                        <Link to="https://www.nintendo.co.kr/support/index.html">
                            <p>고객지원</p>
                        </Link>
                    </li>
                    <li className="online-store">
                        <Link to="https://store.nintendo.co.kr/">
                            <p>온라인 스토어</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Header;