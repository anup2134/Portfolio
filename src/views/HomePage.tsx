import Highlight from "../components/Highlight.js";
import Email from "../assets/email.svg";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import ProjectsSection from "../components/ProjectsSection.js";
import { useEffect, useState } from "react";

export default function HomePage({
  visited,
  setVisited,
}: {
  visited: boolean;
  setVisited: (visited: boolean) => void;
}) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const hasVisited = visited;
    if (!hasVisited) {
      setAnimate(true);
      setVisited(true);
    }
  }, []);
  return (
    <div className="">
      {/* <Game /> */}
      <h2 className="alpino-500 text-xl mb-2 mt-10">
        Hello! I'm <span className="text-sky">Anup Bhoos</span>
      </h2>
      <h1 className="alpino-700 text-5xl sm:text-3xl leading-[130%] tracking-tight">
        Passionate{" "}
        <Highlight text="Full-stack" color="#16a34a" animate={animate} />{" "}
        developer and
        <Highlight
          text="Machine learning"
          color="#9B4DCA"
          delay="2s"
          animate={animate}
        />{" "}
        engineer
      </h1>
      <p className="text-para dark:text-paraDark text-lg satoshi-500 mt-2">
        Developer, OSS contributor. I read, game and travel for fun.
        <br />
        IIT Roorkee graduate
      </p>
      <ul className="flex gap-x-16 mt-20 sm:mt-10 items-center">
        <li>
          <a href="https://github.com/anup2134/" target="_blank">
            <img
              src={GitHub}
              className="h-8 w-8 fill-para hover:scale-125 transition-transform duration-200"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anup-bhoos/" target="_blank">
            <img
              src={LinkedIn}
              className="h-8 w-8 fill-para hover:scale-125 transition-transform duration-200"
            />
          </a>
        </li>
        <li>
          <a href="mailto:anup.bhoos2003@gmail.com" target="_blank">
            <img
              src={Email}
              className="h-8 w-8 hover:scale-125 transition-transform duration-200"
            />
          </a>
        </li>
      </ul>
      <p className="mt-10 text-lg satoshi-500 text-para dark:text-[#cbd5e1] transition-colors duration-700">
        I am a Full-stack and Machine learning developer with expertise in
        data-driven problem-solving, scalable solution development, and ML model
        implementation to optimize efficiency. Proficient in modern web
        technologies, I specialize in creating innovative applications and
        leveraging AI for real-world impact. Combining technical expertise with
        creative thinking, I strive to deliver meaningful and effective results.
      </p>
      <ProjectsSection />
    </div>
  );
}
