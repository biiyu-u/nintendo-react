import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    // const el = elRef.current;
    // if (el) {
    //     const onWheel = (e) => {
    //         if (e.deltaY == 0) return;
    //         e.preventDefault();
    //         // el.children[0].style.transform = `tranlateX(${e.deltaY}px)`;
    //         console.log(e.deltaY);
    //         el.children[0].style.transform = `translateZ(477px) rotateZ(-8deg) rotateY(${e.deltaY}deg)`;
    //         // el.children[0].style.transform = `translateX(${e.deltaY}px) translateZ(477px) rotateZ(-8deg) rotateY(${e.deltaY}deg)`;
    //         // el.scrollTo({
    //         //   left: el.scrollLeft + e.deltaY,
    //         //   behavior: "smooth"
    //         // });
    //     };
    //     el.addEventListener('wheel', onWheel);
    //     return () => el.removeEventListener('wheel', onWheel);
    // }
  }, []);
  return elRef;
}
