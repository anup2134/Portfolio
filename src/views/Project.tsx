import { useLocation } from "react-router-dom";

export default function Project({
  image,
  description,
  outcomes,
  liveLink,
  githubLink,
}: {
  githubLink?: string;
  liveLink?: string;
  image: string;
  description: string;
  outcomes: string;
}) {
  const location = useLocation();
  const name = decodeURIComponent(location.pathname).split("/")[2];
  const LinkSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-external-link-icon lucide-external-link"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    );
  };

  return (
    <div className="">
      <div className="gap-x-5 flex items-center">
        <img src={image} className="h-8 w-8" />
        <h1 className="dark:text-foregroundDark text-foregroundLight text-3xl sm:text-2xl alpino-700 transition-colors duration-700">
          {name}
        </h1>
      </div>
      <div className="flex text-sky mb-5">
        {liveLink && (
          <a href={liveLink} className="flex gap-x-2 items-center">
            <span>Live project link</span>
            <LinkSVG />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} className="flex gap-x-2 items-center">
            <span>Github repository link</span>
            <LinkSVG />
          </a>
        )}
      </div>
      <h2 className="dark:text-foregroundDark text-foregroundLight text-[22px] sm:text-xl mb-3 alpino-700 transition-colors duration-700">
        Description
      </h2>
      <ul className="list-decimal list-outside text-para dark:text-paraDark satoshi-500 mb-5 leading-[1.375rem] sm:ml-4">
        {description.split("\n").map((line: string, idx: number) => {
          return (
            <li key={idx} className="mb-1 transition-colors duration-700">
              {line}
            </li>
          );
        })}
      </ul>

      <h2 className="dark:text-foregroundDark text-foregroundLight text-[22px] sm:text-xl mb-3 alpino-700 transition-colors duration-700">
        Outcomes
      </h2>
      <ul className="list-decimal list-outside text-para dark:text-paraDark satoshi-500 mb-5 leading-[1.375rem] sm:ml-4">
        {outcomes.split("\n").map((line: string, idx: number) => {
          return (
            <li key={idx} className="mb-1 transition-colors duration-700">
              {line}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
