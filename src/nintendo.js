import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Nintendo = () => {
    // 드롭다운
        const [openDropdown, setOpenDropdown] = useState(null);
      
        const closeAllDropdowns = () => {
          setOpenDropdown(null);
        };
      
        const handleMouseEnter = (dropdown) => {
          setOpenDropdown(dropdown);
        };
    //[ Sec 01 ]
        const slideWidth = 744;
        const [currentPosition, setCurrentPosition] = useState(0);
    
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
        }

    //[ Sec 03 ]
    // useRef
    let container = document.querySelectorAll('.new-game-list .contents .container');

    // useEffect
    container.forEach(container => {
        container.addEventListener('mousemove', function(e){
            let x = e.offsetX;
            let y = e.offsetY;
            let rotateY = -((x / container.clientWidth) * 2 - 1) * 20;
            let rotateX = (((y / container.clientHeight) * 2 - 1) * 20);
    
            container.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
  
    

    container.addEventListener('mouseout', function(){
        container.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
        });
    });

    /*
    useEffect(() => {
    if (fixedPosition) {
      setPosition(fixedPosition);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current && tooltipRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setPosition({ x, y });
      }
    };

    if (isVisible) {
      containerRef.current?.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible, containerRef, fixedPosition]);
    */

    
  return (
    <>
    <div className="header" style={{width:"100%"}}>
        <div className="inner" style={{width:'1200px', margin:'0 auto',padding:'30px'}}>
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
                            height: openDropdown === 'hardware' ? 'auto' : '0px',
                            overflow: 'hidden',
                            transition: 'height 0.5s'
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
                            height: openDropdown === 'software' ? 'auto' : '0px',
                            overflow: 'hidden',
                            transition: 'height 0.5s'
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
                            height: openDropdown === 'topic' ? 'auto' : '0px',
                            overflow: 'hidden',
                            transition: 'height 0.5s'
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
                                            <Link href="https://www.nintendo.co.kr/news/article/remlisq669gw78ScpkyFj">
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
                                            <Link href="https://www.nintendo.co.kr/news/article/2jrFOAkgCTYwUKVfxRykfe">
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
                                            <Link href="https://www.nintendo.co.kr/news/article/3aDvepeZCCcuSf3XBSBOlM">
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
                                    <Link href="">News 목록</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="https://www.nintendo.co.kr/support/index.html">
                            <p>고객지원</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://store.nintendo.co.kr/">
                            <p>온라인 스토어</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

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
        </div>
        <img className="bg-orange" src="../public/image/Sec01/orange.png"/>
    </section>

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

    <section className="new-game" style={{width:"100%"}}>
        <div id="new-game">
            <h3 className="new-game-title">NEW GAME</h3>
            <ul className="new-game-list">
                <li className="contents">
                    <div className="container">
                        <div className="card"></div>
                    </div>
                    <div className="new-game-text">
                        <h3>Luigi Mansion 2 HD</h3>
                        <p>루이지 맨션 2 HD</p>
                    </div> 
                </li>
                <li className="contents">
                    <div className="container">
                        <div className="card"></div>
                    </div>
                    <div className="new-game-text">
                        <h3>Paper Mario The Thousand-year Door</h3>
                        <p>페이퍼 마리오 1000년의 문</p>
                    </div>
                </li>
                <li className="contents">
                    <div className="container">
                        <div className="card"></div>
                    </div>
                    <div className="new-game-text">
                        <h3>Princess Peach Showtiome!</h3>
                        <p>프린세스 피치 Showtime!</p>
                    </div>
                </li>
                <li className="contents">
                    <div className="container">
                        <div className="card"></div>
                    </div>
                    <div className="new-game-text">
                        <h3>Mario vs Donkey Kong</h3>
                        <p>마리오 vs. 동키콩</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <section className="online" style={{width:"100%"}}>
        <div id="online">
            <div className="online-logo"></div>
            <div className="OLED">
                <p>Nintendo Switch OLED</p>
            </div>
        </div>
        <img className="bg-star" src="image/Sec04/bg_star.png" alt="날고있는 별 이미지" />
    </section>

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
    
    <section className="moreservice" style={{width: "100%"}}>
        <div id="moreservice">
            <div>
                <img className="plusimg" src="image/Sec06/plus.png" />
            </div>
            <h3>추가 팩 가입 시</h3>
            <div className="slide-box">
                <div className="slide-container" style={{perspective: "1996px"}}>
                    <ul className="slide-wrap" style={{transform: "translateZ(998px) rotateY(106.667deg)"}}>
                        <li className="slide" style={{transform:"rotateY(0deg) translateZ(996px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/nintendo64.png" alt="닌텐도 64 이미지" />
                                <span>Nintendo 64™ Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(30deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Game_Boy.png" alt="게임보이 이미지" />
                                <span>Game Boy Advance Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(60deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/SEGA.png" alt="세가 메가드라이브 이미지" />
                                <span>SEGA Mega Drive Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(90deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/ACNH.png" alt="모여봐요 동물의 숲 해피 홈 파라다이스 이미지" />
                                <span>모여봐요 동물의 숲 해피 홈 파라다이스</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(120deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Octo.png" alt="스플래툰 2 Octo Expansion 이미지" />
                                <span>스플래툰 2 Octo Expansion</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(150deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Booster_course.png" alt="마리오 카트 8 디럭스 부스터 코스 패스 이미지" />
                                <span>마리오 카트 8 디럭스 부스터 코스 패스</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(180deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/nintendo64.png" alt="닌텐도 64 이미지" />
                                <span>Nintendo 64™ Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(210deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Game_Boy.png" alt="게임보이 이미지" />
                                <span>Game Boy Advance Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(240deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/SEGA.png" alt="세가 메가드라이브 이미지" />
                                <span>SEGA Mega Drive Nintendo Switch Online</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(270deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/ACNH.png" alt="모여봐요 동물의 숲 해피 홈 파라다이스 이미지" />
                                <span>모여봐요 동물의 숲 해피 홈 파라다이스</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(300deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Octo.png" alt="스플래툰 2 Octo Expansion 이미지" />
                                <span>스플래툰 2 Octo Expansion</span>
                            </div>
                        </li>
                        <li className="slide" style={{transform:"rotateY(330deg) translateZ(998px)"}}>
                            <div className="slide-content">
                                <img src="image/Sec06/Booster_course.png" alt="마리오 카트 8 디럭스 부스터 코스 패스 이미지" />
                                <span>마리오 카트 8 디럭스 부스터 코스 패스</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className="plan" style={{width: "100%"}}>
        <div id="plan">
            <img style={{width:"378px", height: "220px"}} src="image/Sec07/콩돌밤돌.png" />
            <div className="plan-wrapper">
                <div className="personal-plan">
                    <div>
                        <h1>개인 플랜</h1>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>1개월 (30일)</p>
                                <p>￦4,900</p>
                            </li>
                            <li>
                                <p>12개월 (365일)</p>
                                <p>￦19,900</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>추가 팩</h3>
                        <p>12개월 (365일)</p>
                        <p>￦39,900</p>
                    </div>
                </div>
                <div className="family-plan">
                    <div>
                        <h1>패밀리 플랜</h1>
                    </div>
                    <div>
                        <p>12개월 (365일)</p>
                        <p>￦37,900</p>
                    </div>
                    <div>
                        <h3>추가 팩</h3>
                        <p>12개월 (365일)</p>
                        <p>￦74,900</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="bottom" style={{width: "100%"}}>
        <div id="bottom">
            <div className="bottom-logo">
                <Link href="index.html" className="logo"></Link>
            </div>
            <div className="bottom-menu-wrapper">
                <div className="bottom-menu">
                    <ul className="bottom-menu-list">
                        <li>
                            <h3>본체 / amiibo</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/hardware/index.html">Nintendo Switch</Link>
                                </li>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/amiibo/index.html">amiibo</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>소프트웨어</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/software/switch">Nintendo Switch 소프트웨어</Link>
                                </li>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/schedule">소프트웨어 발매 스케쥴</Link>
                                </li>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/software/smartphone/">스마트폰용 앱</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>고객지원</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/support/switch/index.html">Nintendo Switch</Link>
                                </li>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/3DS/customer/index.html">Nintendo 3DS</Link>
                                </li>
                                <li>
                                    <Link href="https://support-kr.nintendo.com/hc/ko/requests/new">온라인 고객 상담</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>한국닌텐도</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/corporate/kr/kr01.html">회사개요</Link>
                                </li>
                                <li>
                                    <Link href="https://www.nintendo.co.kr/corporate/kr/kr04.html">찾아오시는 길</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="bottom-service-wrapper">
                    <div className="bottom-sns">
                        <ul>
                            <li>
                                <Link href="https://www.youtube.com/@Nintendo_KR">
                                    <img src="image/bottom/youtube.png" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://story.kakao.com/ch/nintendokorea">
                                    <img src="image/bottom/kakaostory.png" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/Nintendo.kr">
                                    <img src="image/bottom/facebook.png" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/Nintendo_Korea">
                                    <img src="image/bottom/x.png" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://pf.kakao.com/_Xxiwzxj">
                                    <img src="image/bottom/channel.png" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-service">
                        <ul>
                            <li>
                                <Link href="https://www.nintendo.co.kr/amiibo">
                                    <img src="image/bottom/amiibo.png" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://my.nintendo.com">
                                    <img src="image/bottom/myNintendo.png" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer" style={{width: "100%"}}>
        <div id="footer">
            <p><Link href="https://www.nintendo.co.kr/common/account.html">이용약관</Link>| 개인정보처리방침</p>
            <p>고객지원 문의전화 : 1670-9900 (평일 오전 9시 30분~오후 5시 30분)</p>
            <p>※토/일/공휴일/회사 정기휴일 및 특별휴일 제외</p>
            <p>ⓒ 2006 Nintendo of Korea Co., Ltd. All Rights Reserved.</p>
            <p>상호명 : 한국닌텐도주식회사 대표자명 : 미우라 타카히로 사업자등록번호 : 120-87-03578</p>
        </div>
    </footer>
    </>
  )
}

export default Nintendo;