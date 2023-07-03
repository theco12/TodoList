import React from "react";
import { useState } from "react";
import "./deepdive.css";

export default function DeepDive() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(event) => {
        console.log(event.clientX, event.clientY);
        setPosition({ x: event.clientX, y: event.clientY });
      }}>
      <div className="pointer" style={{ transform: `translate(${position.x}px,${position.y}px` }} />
    </div>
  );
}
