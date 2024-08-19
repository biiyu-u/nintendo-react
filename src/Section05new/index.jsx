import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { throttle } from "lodash";
import { motion, useSpring, useMotionValue } from "framer-motion";
import clsx from "clsx";

export default function MainSectionRecruit(props) {
  const bgChangeRef = useRef();
  const scrollRef = useRef();
  const slideWrapRef = useRef();
  const slideBoxRef = useRef();
  const slideRef = useRef([]);

  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [active, setAcitve] = useState(false);
  const [tag, setTag] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(0);
  const [bgChange, setBgChange] = useState();
  const [translateZ, setTranslateZ] = useState(0);

  const handleMouseMove = throttle((e) => {
    e.stopPropagation();
    setEndPos(e.clientX);
    setTag(false);
  }, 0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartPos(e.clientX);
  };

  const motionVal = useMotionValue(0);
  const slideScroll = useSpring(motionVal, {
    bounce: 0,
    damping: 25,
    velocity: 2,
  });

  let allowWheel = true;
  const handleScroll = throttle((e) => {
    const recruitSection = document.querySelector(".MainSectionRecruit");

    if (document.querySelector(".popup-main")) {
      if (document.querySelector(".popup-main").contains(e.target)) {
        allowWheel = false;
      }
    }

    if (allowWheel) {
      if (e.deltaY < 0) {
        motionVal.set(motionVal.get() - Math.abs(e.deltaY) * 0.1);
      } else if (e.deltaY > 0) {
        motionVal.set(motionVal.get() + Math.abs(e.deltaY) * 0.1);
      }
    }
  }, 0);

  useEffect(() => {
    function setSlide() {
      const slide = slideRef.current;
      const z = Math.round(
        scrollRef.current.offsetHeight / 2 / Math.tan(Math.PI / slide.length)
      );
      setTranslateZ(z);
      slide.forEach((el, idx) => {
        el.style.transform =
          "rotateY(" +
          (360 / slide.length) * idx +
          "deg) translateZ(" +
          z +
          "px)";
      });
    }
    setSlide();

    window.addEventListener("resize", setSlide);
    slideBoxRef.current.addEventListener("mousedown", handleMouseDown);

    let observe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgChange(true);
        } else {
          setBgChange(false);
        }
      },
      { threshold: 0 }
    );
    observe.observe(slideBoxRef.current);

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("wheel", handleScroll);
        } else {
          window.removeEventListener("wheel", handleScroll);
        }
      },
      { threshold: 0 }
    );
    sectionObserver.observe(bgChangeRef.current);

    return () => {
      if (observe) observe.disconnect();
      if (sectionObserver) sectionObserver.disconnect();
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", setSlide);
    };
  }, []);

  useEffect(() => {
    let timer;
    let mousePos = startPos - endPos;
    clearTimeout(timer);
    motionVal.set(motionVal.get() + mousePos * 0.05);

    timer = setTimeout(() => {
      const event = new MouseEvent("mouseup", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    }, 200);
  }, [endPos]);

  useEffect(() => {
    const handleMouseUp = (e) => {
      setIsMouseDown(false);
      slideBoxRef.current.removeEventListener("mousemove", handleMouseMove);
    };
    if (isMouseDown) {
      slideBoxRef.current.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMouseDown]);

  return (
    <motion.section
      onMouseMove={(e) => {
        setAcitve(true);
        if (bgChange) {
          const bounds = bgChangeRef.current.getBoundingClientRect();
          const posX = e.clientX - bounds.left;
          const posY = e.clientY - bounds.top;
          setMousePosition({ left: posX, top: posY });
        }
      }}
      onMouseLeave={() => {
        setAcitve(false);
      }}
      ref={bgChangeRef}
    >
      <div className={styles.slideBox} ref={slideBoxRef}>
        <div
          className={clsx(styles.slideContainer)}
          ref={scrollRef}
          style={{ perspective: translateZ * 2 + "px" }}
        >
          <motion.ul
            className={clsx(styles.slideWrap)}
            ref={slideWrapRef}
            style={{
              z: translateZ + "px",
              rotateY: slideScroll,
            }}
          >
            {Array.from({ length: 12 }).map((_, idx) => {
              const items = [
                "Strategy Planner",
                "Product Manager",
                "ui/ux designer",
                "ios developer",
                "android developer",
                "web developer",
              ];
              const item = items[idx % items.length]; // 아이템을 순환하도록 설정
              return (
                <li
                  className={clsx(styles.slide)}
                  key={item + idx} // key에 idx 추가
                  ref={(el) => (slideRef.current[idx] = el)} // ref에 idx 사용
                >
                  <div
                    className={clsx(styles.slideContent)}
                    data-idx={idx}
                    onMouseOver={(e) => {
                      setTag(true);
                      let team = e.currentTarget.dataset.idx;
                      setTeamName(team);
                    }}
                    onMouseLeave={() => {
                      setTag(false);
                    }}
                  >
                    <div className={clsx(styles.slideImg)}>
                      <img
                        src={
                          "/images/main/img_recruit_slide_0" +
                          ((idx % items.length) + 1) +
                          ".webp"
                        }
                      />
                    </div>
                    <span className={clsx(styles.slideText)}>{item}</span>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* <TeamTag tag={tag} mousePosition={mousePosition} teamIdx={teamName} /> */}
      </div>
    </motion.section>
  );
}
