import { useLocation } from "react-router-dom";

export default function Project({
  image,
  description,
  outcomes,
}: {
  image: string;
  description: string;
  outcomes: string;
}) {
  const location = useLocation();
  const name = decodeURIComponent(location.pathname).split("/")[2];
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
