import ResumeCard from "../components/ResumeCard.tsx";
// import Education from "../components/Education.tsx";
export default function Resume() {
  return (
    <div>
      <h1 className="dark:text-foregroundDark text-foregroundLight text-3xl mb-10">
        Education
      </h1>
      {/* <Education> */}
      <ResumeCard
        date="Nov 2020 - Jul 2024"
        profile="B.Tech Mechanical Engineering"
        organisation="Indian Institute of Technology, Roorkee"
        description="CGPA: 7.276"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg/330px-Indian_Institute_of_Technology_Roorkee_Logo.svg.png"
      />
      <ResumeCard
        date="Aug 2018 - Mar 2020"
        profile="Class XII"
        organisation="Pemraj Sarda College, Ahmednagar"
        description="Percentage: 80.57%"
        src="https://sardacollege.org/wp-content/uploads/2024/02/sarda_logo_1.jpeg"
      />
      <ResumeCard
        date="Jun 2017 - Mar 2018"
        profile="Class X"
        organisation="Bhausaheb Firodiya Highschool, Ahmednagar"
        description="Percentage: 93.20%"
        src="https://www.svgrepo.com/show/69263/school.svg"
      />
      {/* </Education> */}
    </div>
  );
}
