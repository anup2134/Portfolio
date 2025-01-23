import { Outlet, useNavigate } from "react-router-dom";
import Home from "../assets/home.svg";
import About from "../assets/about.svg";
import Projects from "../assets/projects.svg";
import Darkmode from "../assets/darkmode.svg";
import Lightmode from "../assets/lightmode.svg";
import Resume from "../assets/resume.svg";
import { useEffect, useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    // console.log("clicked");
    const root = document.documentElement;
    setMode((prevMode) => {
      if (prevMode === "dark") {
        root.classList.remove("dark");
        return "light";
      }
      root.classList.add("dark");
      return "dark";
    });
  };

  return (
    <main className="antialiased satoshi-400 dark:text-foregroundDark dark:bg-backgroundDark bg-white text-foregroundLight min-h-screen max-h-fit">
      <section className="flex min-h-screen max-h-fit">
        <div
          className={`min-h-screen max-h-fit w-1/6 border-r ${
            mode === "dark" ? "border-r-foregroundLight" : "border-r-[#E5E7EB]"
          } flex flex-col gap-y-16 justify-center items-end pr-16`}
        >
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Home} className="w-[21px] h-[21px]" />
          </button>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            <img src={About} className="w-[21px] h-[21px]" />
          </button>
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            <img src={Projects} className="w-[21px] h-[21px]" />
          </button>
          <button
            onClick={() => {
              navigate("/resume");
            }}
          >
            <img src={Resume} className="w-[21px] h-[21px]" />
          </button>
        </div>
        <div className="w-full px-6 max-w-[1000px]">
          <div className="flex h-16 items-center w-full justify-end gap-x-8 mb-8">
            <button onClick={toggleMode}>
              {mode === "dark" ? (
                <img src={Darkmode} className="w-4 h-4" />
              ) : (
                <img src={Lightmode} className="w-4 h-4" />
              )}
            </button>
            <a
              className="bg-sky rounded-full px-3 h-8 text-center flex items-center text-darkButton hover:bg-[#0284C7] transition-colors duration-300"
              href="https://drive.google.com/file/d/16qT5iqSPYnxpHf9gyDMWEE_d48YLYdev/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  );
}
