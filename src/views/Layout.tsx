import { Outlet } from "react-router-dom";

import Darkmode from "../assets/darkmode.svg";
import Lightmode from "../assets/lightmode.svg";

import { useState } from "react";
import Navbar from "../components/Navbar.tsx";

export default function HomePage() {
  // const navigate = useNavigate();
  const [mode, setMode] = useState<"dark" | "light">("dark");
  // const location = useLocation();
  // console.log(location);
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
    <main
      className="antialiased satoshi-500 dark:text-foregroundDark 
    -dark:bg-backgroundDark -bg-gray-200
     text-foregroundLight min-h-screen max-h-fit pb-20 overflow-hidden"
      style={{
        transition: "color 0.7s linear",
      }}
    >
      <div className="absolute w-full h-full -z-10 bg-backgroundDark dark:bg-gray-200"></div>
      <section className="flex sm:block  min-h-screen max-h-fit">
        {/* <div
          className="min-h-screen max-h-fit w-1/6 border-r sm:border-t sm:border-r-0
              dark:border-r-foregroundLight sm:border-t-foregroundLight border-r-[#E5E7EB]
              flex flex-col gap-y-16 justify-center items-end pr-16 sm:pr-0 sm:flex-row sm:gap-x-10
              sm:gap-y-0 sm:block sm:fixed sm:-bottom-2 sm:z-20 sm:min-h-fit sm:h-16 sm:w-screen sm:max-h-none
              sm:justify-center sm:items-center sm:bg-black"
        > */}
        <Navbar />
        <div className="w-1/6 sm:hidden mr-7"></div>
        <div className="w-full px-6 max-w-[1000px]">
          <div className="flex h-16 items-center w-full justify-end gap-x-8 mb-8">
            <button onClick={toggleMode} className="w-4 h-4 relative">
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  transform: mode === "dark" ? "scale(500)" : "scale(0)",
                  borderRadius: "9999px",
                  backgroundColor: mode === "dark" ? "#0f172a" : "",
                  zIndex: "-5",
                  transitionProperty: "transform",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: mode === "dark" ? "2000ms" : "0ms",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  transform: mode === "light" ? "scale(500)" : "scale(0)",
                  borderRadius: "9999px",
                  backgroundColor: mode === "light" ? "#e5e7eb" : "",
                  zIndex: "-5",
                  transitionProperty: "transform",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: mode === "light" ? "2000ms" : "0ms",
                }}
              ></div>
              {mode === "dark" ? (
                <img src={Darkmode} className="w-4 h-4" />
              ) : (
                <img src={Lightmode} className="w-4 h-4" />
              )}
            </button>
            <a
              className="bg-sky rounded-full px-3 h-8 text-center flex items-center text-darkButton hover:bg-[#0284C7] transition-colors duration-300"
              href="https://drive.google.com/file/d/1nrbHLjL6vzh81OaaE4AnTsxWojxM1zxs/view?usp=sharing"
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
