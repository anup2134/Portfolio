import Highlight from "../components/Highlight";
import Email from "../assets/email.svg";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import ProjectCard from "../components/ProjectCard";
import Game from "../components/Game";

export default function HomePage() {
  return (
    <div className="">
      <Game />
      <h2 className="cabinet-500 text-xl mb-2 mt-10">
        Hello! I'm <span className="text-sky">Anup Bhoos</span>
      </h2>
      <h1 className="cabinet-700 text-5xl leading-[130%]">
        Passionate <Highlight text="Full-Stack" color="#16a34a" /> developer and
        <Highlight text="Machine Learning" color="#9B4DCA" /> Engineer
      </h1>
      <p className="text-[#64748b] dark:text-[#94a3b8] text-lg cabinet-500 mt-2">
        Developer, OSS Contributor. I read, game and travel for fun.
        <br />
        IIT Roorkee Graduate
      </p>
      <ul className="flex gap-x-16 mt-20 items-center">
        <li>
          <a href="https://github.com/anup2134/" target="_blank">
            <img src={GitHub} className="h-8 w-8 fill-[#64748B]" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anup-bhoos/" target="_blank">
            <img src={LinkedIn} className="h-8 w-8 fill-[#64748B]" />
          </a>
        </li>
        <li>
          <a href="mailto:anup.bhoos2003@gmail.com" target="_blank">
            <img src={Email} className="h-8 w-8" />
          </a>
        </li>
      </ul>
      <p className="mt-10 text-lg satoshi-400 text-[#64748b] dark:text-[#cbd5e1]">
        I am a Full-Stack and Machine Learning Developer with expertise in
        data-driven problem-solving, scalable solution development, and ML model
        implementation to optimize efficiency. Proficient in modern web
        technologies, I specialize in creating innovative applications and
        leveraging AI for real-world impact. Combining technical expertise with
        creative thinking, I strive to deliver meaningful and effective results.
      </p>

      <section className="mt-10 satoshi-700 text-[#64748b] dark:text-[#e2e8f0] text-xl pb-20">
        <h1 className="mb-10 cabinet-700">Latest projects</h1>
        <ul className="flex flex-col gap-y-6">
          <li className="flex gap-x-8">
            <ProjectCard
              name="Fluid-flow reconstruction"
              description="asdfasdfdsf"
            />
            <ProjectCard name="Flyleaf" description="asdfasdfasdfsadf" rotate />
          </li>
          <li className="flex gap-x-8">
            <ProjectCard name="Super TTT" description="asdfsdfsd" />
            <ProjectCard name="Hello Fresh" description="asdfsdfsd" rotate />
          </li>
        </ul>
      </section>
    </div>
  );
}
