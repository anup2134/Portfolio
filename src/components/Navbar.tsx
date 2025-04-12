import Home from "../assets/home.svg";
import About from "../assets/about.svg";
import Projects from "../assets/projects.svg";
import { memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 820px)").matches;

  return (
    <div
      className="min-h-screen max-h-fit w-[12%] border-r 
        dark:border-r-foregroundLight  border-r-gray-300
        flex justify-center items-center 
        sm:pr-0 sm:flex sm:flex-row sm:gap-x-10 sm:gap-y-0 sm:fixed sm:-bottom-2 sm:z-20 
        sm:min-h-fit sm:h-16 sm:w-screen sm:max-h-none
        sm:justify-center sm:items-center sm:dark:bg-backgroundDark sm:bg-gray-200 sm:border-t sm:border-r-0 sm:border-t-foregroundLight fixed"
      style={{
        transition: "border-color 0.8s linear,background-color 0.7s linear",
      }}
    >
      <div
        className="dark:hover:bg-[#080d18] hover:bg-gray-300 transition-colors duration-300 rounded-md flex flex-col gap-y-8 
      sm:flex-row sm:gap-x-8 sm:px-10 sm:hover:bg-gray-200 sm:dark:hover:bg-backgroundDark relative p-2 mx-auto"
      >
        <div
          className="w-10 h-10 dark:bg-[#1a2748] bg-gray-100 absolute rounded-md"
          style={{
            top: isMobile
              ? 8
              : location.pathname === "/"
              ? 8
              : location.pathname === "/about"
              ? 8 + 40 + 32
              : 8 + 40 * 2 + 32 * 2,
            left: !isMobile
              ? null
              : location.pathname === "/"
              ? 40
              : location.pathname === "/about"
              ? 40 * 2 + 32
              : 40 * 3 + 32 * 2,
            transition:
              "top 0.5s ease, background-color 1s linear, left 0.5s ease",
          }}
        ></div>
        <button
          className={`w-10 h-10 flex justify-center items-center rounded-md z-10 shake-class`}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Home} className="w-[21px] h-[21px]" />
        </button>
        <button
          className={`w-10 h-10  flex justify-center items-center rounded-md z-10 shake-class`}
          onClick={() => {
            navigate("/about");
          }}
        >
          <img src={About} className="w-[21px] h-[21px]" />
        </button>
        <button
          className={` w-10 h-10  flex justify-center items-center rounded-md z-10 shake-class`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          <img src={Projects} className="w-[21px] h-[21px]" />
        </button>
      </div>
    </div>
  );
});

export default Navbar;
