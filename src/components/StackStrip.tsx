import { useRef, useEffect } from "react";
import React from "../assets/react.svg";
export default function StackStrip() {
  const canRef = useRef<HTMLCanvasElement>(null);
  function loadImage(src: string) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  useEffect(() => {
    const canvas = canRef?.current ?? null;
    let animationNum: number;
    if (!canvas) return;
    canvas.width = canRef.current?.offsetWidth ?? 0;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mainFun = async () => {
      const img = (await loadImage(React)) as HTMLImageElement;
      const obj = {
        img,
        x: 0,
        y: 10,
        speed: 2,
      };
      const draw = (obj: {
        img: HTMLImageElement;
        x: number;
        y: number;
        speed: number;
      }) => {
        ctx.drawImage(obj.img, obj.x, obj.y, 80, 80);
      };

      const update = (obj: {
        img: HTMLImageElement;
        x: number;
        y: number;
        speed: number;
      }) => {
        obj.x += obj.speed;
      };

      const animate = (obj: {
        img: HTMLImageElement;
        x: number;
        y: number;
        speed: number;
      }) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(obj);
        update(obj);
        // animationNum = requestAnimationFrame(animate);
      };
      draw(obj);
    };

    mainFun();
  }, []);
  return <canvas ref={canRef} className="w-full" />;
}
