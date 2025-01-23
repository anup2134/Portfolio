import { useRef, useEffect } from "react";
// import React from "../assets/react.svg";
export default function StackStrip() {
  const canRef = useRef(null);

  useEffect(() => {}, []);
  return <canvas ref={canRef} className="w-full h-24" />;
}
