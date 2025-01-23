import { useRef, useEffect } from "react";

export default function StackStrip({ imageArray }: { imageArray: string[] }) {
  const canRef = useRef<HTMLCanvasElement>(null);
  function loadImage(src: string) {
    // console.log(src);
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = src;
      //   const arr = src.split("/");
      //   img.alt = arr[arr.length].split(".")[0];
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
    // console.log(canvas.width, canvas.height);
    const ctx = canvas.getContext("2d");
    const speed = 0.7;
    if (!ctx) return;

    const mainFun = async () => {
      let x = -100;
      const objects = await Promise.all(
        imageArray.map(async (src, idx) => {
          const img = (await loadImage(src)) as HTMLImageElement;
          const y = 10;
          x += 150;
          if (idx === imageArray.length) {
            x -= 100;
          }
          return { img, x, y };
        })
      );

      //   console.log(objects);

      const draw = (
        objects: {
          img: HTMLImageElement;
          x: number;
          y: number;
        }[]
      ) => {
        objects.forEach((obj) => {
          //   if (!obj) return;
          ctx.drawImage(obj.img, obj.x, obj.y, 80, 80);
        });
      };

      //   draw(objects);

      const update = (
        objects: {
          img: HTMLImageElement;
          x: number;
          y: number;
        }[]
      ) => {
        objects.forEach((obj) => {
          obj.x += speed;
          if (obj.x >= x) {
            obj.x = -80;
          }
        });
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(objects);
        update(objects);
        animationNum = requestAnimationFrame(animate);
      };
      animate();
    };
    mainFun();

    return () => {
      cancelAnimationFrame(animationNum);
    };
  }, []);
  return <canvas ref={canRef} className="w-full" />;
}
