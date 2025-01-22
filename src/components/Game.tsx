import { useEffect, useRef } from "react";

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = 360;
    const ctx = canvas.getContext("2d");
    const gravity = 0.5;
    let animationId: number;
    if (!ctx) return;
    const OBJ = {
      x: canvas.width * Math.random(),
      y: 400,
      speedX: -(Math.random() * 2 + 1),
      speedY: -(Math.random() * 2 + 1),
    };

    const drawObj = (obj: {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
}) => {
      ctx.font = "50px CabinetGrotesk-Regular";
      ctx.fillText("{", obj.x, obj.y);
    };
    const updateObj = (obj: {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
}) => {
      obj.y += obj.speedY;
      obj.speedY += gravity * 0.015;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateObj(OBJ);
      drawObj(OBJ);
      animationId = requestAnimationFrame(animate);
      if (OBJ.y <= 0) {
        OBJ.y = 400;
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="w-full bg-[#64748b] dark:bg-[#e2e8f0] font-bold text-black rounded-2xl"
      height={360}
    />
  );
}
