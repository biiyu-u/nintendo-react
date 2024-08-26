// fixedPosition={{ x: 0, y: 0 }}

import React, { useState, useEffect, useRef } from "react";

interface TooltipProps {
  texts: string[];
  isVisible: boolean;
  containerRef: React.RefObject<HTMLDivElement> | null;
  fixedPosition?: { x: number; y: number };
}

const Tooltip: React.FC<TooltipProps> = ({
  texts,
  isVisible,
  containerRef,
  fixedPosition,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && texts.length > 0) {
      setText(texts[Math.floor(Math.random() * texts.length)]);
    }
  }, [isVisible, texts]);

  useEffect(() => {
    if (fixedPosition) {
      setPosition(fixedPosition);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef?.current && tooltipRef.current) {
        const rect = containerRef?.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setPosition({ x, y });
      }
    };

    if (isVisible) {
      containerRef?.current?.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      containerRef?.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible, containerRef, fixedPosition]);

  if (!isVisible) return null;

  return (
    <div
      ref={tooltipRef}
      className="bg-[rgba(0,255,0,0.8)] border border-[#00ff00] rounded-full box-shadow-tooltip box-border px-4 py-4 text-black text-sm whitespace-nowrap opacity-100 absolute pointer-events-none z-20"
      style={{
        left: fixedPosition ? `${fixedPosition.x}px` : `${position.x}px`,
        top: fixedPosition ? `${fixedPosition.y}px` : `${position.y}px`,
        transform: fixedPosition
          ? "translate(-50%, -50%) rotate(-5deg)"
          : "translate(-50%, -50%) rotate(-5deg)",
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
