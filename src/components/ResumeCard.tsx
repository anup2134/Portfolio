export default function ResumeCard({
  date,
  profile,
  organisation,
  description,
  src = "",
}: {
  date: string;
  profile: string;
  organisation: string;
  description: string | React.ReactNode;
  src: string;
}) {
  return (
    <div className="flex gap-x-10 mb-10">
      <img
        src={src}
        className="w-16 h-16 rounded-full z-10 bg-gray-200 dark:bg-backgroundDark"
        alt={organisation}
        loading="lazy"
      />
      <div className="">
        <h2 className="dark:text-paraDark text-para text-xs mb-1">{date}</h2>
        <h1 className="text-xl satoshi-700">{profile}</h1>
        <h3>{organisation}</h3>
        <div className="text-para dark:text-paraDark  mt-1">{description}</div>
      </div>
    </div>
  );
}
