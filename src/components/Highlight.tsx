export default function Highlight({
  text,
  color,
  styles = "",
}: {
  text: string;
  color: string;
  styles?: string;
}) {
  return (
    <div
      className={`inline-block -rotate-1`}
      style={{
        background: color + "1A",
      }}
    >
      <span
        className={`${styles} inline-block relative rotate-1`}
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
}
