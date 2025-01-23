import { useEffect, useRef, useState } from "react";

export default function Education({ children }: { children: React.ReactNode }) {
  const [height, setHeight] = useState<number | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef) return;
    if (!divRef.current) return;
    let h = divRef.current.offsetHeight;
    console.log("before", h);
    h = h * 0.6;
    console.log("after", h);
    setHeight(h);
  }, []);

  useEffect(() => {
    console.log("here", height);
  }, [height]);

  return (
    <div className="relative">
      <div
        ref={divRef}
        className="absolute border-l translate-x-8 translate-y-20"
        style={{ height: height ?? "100%" }}
      ></div>
      {children}
    </div>
  );
}
