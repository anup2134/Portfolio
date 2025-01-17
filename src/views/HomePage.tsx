import Highlight from "../components/Highlight";

export default function HomePage() {
  return (
    <div className="pt-[200px]">
      <h2 className="roboto-400 text-lg mb-2">
        Hello! I am <span className="text-sky">Anup Bhoos</span>
      </h2>
      <h1 className="roboto-650 text-5xl leading-[130%]">
        Passionate <Highlight text="Full-Stack" color="#16a34a" /> developer and
        <Highlight text="Machine Learning" color="#9B4DCA" /> Engineer
      </h1>
    </div>
  );
}
