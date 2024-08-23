import { motion } from "framer-motion";
import { useRef } from "react";

export default function Typography(props) {
  const typoRef = useRef();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={
        (props.className ? props.className : "") + " Typography typo-ani"
      }
      ref={typoRef}
    >
      <motion.span
        className="text-wrap"
        custom={props.custom}
        variants={{
          hidden: {
            opacity: 0,
            rotate: props.rotate == "none" ? "0deg" : "16deg",
            y: "150%",
          },
          visible: (custom = 0) => ({
            opacity: 1,
            rotate: "0deg",
            y: "0%",
            transition: {
              duration: 0.8,
              delay: custom * 0.05,
            },
          }),
        }}
      >
        {props.txt}
      </motion.span>
    </motion.div>
  );
}
