import Arrow from "./Arrow";
export default function ProjectCard({
  name,
  description,
  rotate,
}: {
  name: string;
  description: string;
  rotate?: boolean;
}) {
  return (
    <button>
      <div
        className={`w-80 h-80 rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t
     dark:from-slate-800 dark:to-slate-800/30 ${
       rotate ? "rotate-1" : "-rotate-1"
     } hover:rotate-0 
     transition-transform duration-700 hover:duration-100 ease-in-out p-5 text-left`}
      >
        <img src="" className="h-10 w-10 rounded-full" />
        <h2 className="text-[#1e293b] dark:text-[#E2E8F0] satoshi-700 text-lg my-2">
          {name}
        </h2>
        <p className="text-[#64748b] dark:text-[#94a3b8] satoshi-400 text-sm leading-[1.375rem]">
          {description}
        </p>
        <div className="absolute right-5 bottom-5">
          <Arrow fill="#0EA5E9" />
        </div>
      </div>
    </button>
  );
}
