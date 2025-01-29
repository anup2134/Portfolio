import "./Highlight.css";
export default function Highlight({
  text,
  color,
  delay = "0s",
  animate,
}: {
  text: string;
  color: string;
  delay?: string;
  animate: boolean;
}) {
  return (
    <div className={`inline-block w-fit relative`} style={{ color }}>
      {text}
      <div
        className={`-rotate-1 absolute left-0 top-1 text-transparent ${
          animate ? "background-ani" : ""
        } h-12 sm:h-[1.875rem]`}
        style={
          {
            "--dynamic-color": color + "1A",
            animationDelay: delay,
            background: animate ? "transparent" : color + "1A",
          } as React.CSSProperties
        }
      >
        {text}
      </div>
    </div>
  );
}
