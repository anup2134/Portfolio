import Highlight from "../components/Highlight";
import Email from "../assets/email.svg";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import ProjectsSection from "../components/ProjectsSection";
export default function HomePage() {
  return (
    <div className="">
      {/* <Game /> */}
      <h2 className="cabinet-500 text-xl mb-2 mt-10">
        Hello! I'm <span className="text-sky">Anup Bhoos</span>
      </h2>
      <h1 className="cabinet-700 text-5xl leading-[130%]">
        Passionate <Highlight text="Full-Stack" color="#16a34a" /> developer and
        <Highlight text="Machine Learning" color="#9B4DCA" /> Engineer
      </h1>
      <p className="text-para dark:text-paraDark text-lg cabinet-500 mt-2">
        Developer, OSS Contributor. I read, game and travel for fun.
        <br />
        IIT Roorkee Graduate
      </p>
      <ul className="flex gap-x-16 mt-20 items-center">
        <li>
          <a href="https://github.com/anup2134/" target="_blank">
            <img src={GitHub} className="h-8 w-8 fill-para" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anup-bhoos/" target="_blank">
            <img src={LinkedIn} className="h-8 w-8 fill-para" />
          </a>
        </li>
        <li>
          <a href="mailto:anup.bhoos2003@gmail.com" target="_blank">
            <img src={Email} className="h-8 w-8" />
          </a>
        </li>
      </ul>
      <p className="mt-10 text-lg satoshi-400 text-para dark:text-[#cbd5e1]">
        I am a Full-Stack and Machine Learning Developer with expertise in
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
