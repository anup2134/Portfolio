import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Project() {
  const location = useLocation();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [image, setImage] = useState("");
  const name = decodeURIComponent(location.pathname).split("/")[2];
  console.log(localStorage.getItem(`${name}-des`));
  useEffect(() => {
    if (!localStorage.getItem(`${name}-des`)) {
      navigate("/projects");
    }
    if (!localStorage.getItem(`${name}-img`)) {
      navigate("/projects");
    }
    if (!localStorage.getItem(`${name}-out`)) {
      navigate("/projects");
    }
    setDescription(localStorage.getItem(`${name}-des`));
    setOutcomes(localStorage.getItem(`${name}-out`));
    setImage(localStorage.getItem(`${name}-img`));
  }, [location]);

  return (
    <div className="">
      <div className="gap-x-5 mb-5 flex items-center">
        <img src={image} className="h-8 w-8" />
        <h1 className="dark:text-foregroundDark text-foregroundLight text-3xl sm:text-2xl cabinet-700">
          {name}
        </h1>
      </div>
      {description !== "" && description && (
        <>
          <h2 className="dark:text-foregroundDark text-foregroundLight text-2xl sm:text-xl mb-3 cabinet-700">
            Description
          </h2>
          <ul className="list-decimal list-inside text-para dark:text-paraDark satoshi-400 mb-5 leading-[1.375rem]">
            {description.split("\n").map((line: string, idx: number) => {
              return (
                <li key={idx} className="mb-1">
                  {line}
                </li>
              );
            })}
          </ul>
        </>
      )}
      {outcomes !== "undefined" && outcomes !== "" && outcomes && (
        <>
          <h2 className="dark:text-foregroundDark text-foregroundLight text-2xl sm:text-xl mb-3 cabinet-700">
            Outcomes
          </h2>
          <ul className="list-decimal list-inside text-para dark:text-paraDark satoshi-400 mb-5 leading-[1.375rem]">
            {outcomes.split("\n").map((line: string, idx: number) => {
              return (
                <li key={idx} className="mb-1">
                  {line}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
