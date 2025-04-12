import ResumeCard from "../components/ResumeCard.js";
// import Education from "../components/Education.tsx";
import School from "../assets/school.svg";

export default function Resume() {
  return (
    <div>
      <h1 className="dark:text-foregroundDark text-backgroundDark text-[22px] mt-10 mb-5 alpino-700 transition-colors duration-500">
        Education
      </h1>
      <div className="relative">
        <div
          className="absolute h-3/4 w-1 border-l dark:border-l-foregroundDark border-l-foregroundLight top-3 z-0 left-8"
          style={{ transition: "border-color 0.7s linear" }}
        ></div>
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
          src={School}
        />
      </div>
      <h1 className="dark:text-foregroundDark text-backgroundDark text-[22px] mb-5 mt-10 alpino-700 transition-colors duration-700">
        Work Experience
      </h1>
      <ResumeCard
        date="May 2023 - Jun 2023"
        profile="Summer Intern"
        organisation="Indian Institute of Technology, Roorkee"
        description={
          <ul className="list-disc list-outside">
            <li>
              {/* <span className="pl-4 block"> */}I explored the use of Machine
              learning to predict wall temperatures using ambient temperature
              data collected over a two-month period across four consecutive
              years.
              {/* </span> */}
            </li>
            <li>
              My role involved collecting and preprocessing data, building and
              training XGBoost and LSTM models, and conducting exploratory data
              analysis to improve model accuracy.
            </li>
            <li>
              By fine-tuning hyperparameters and evaluating performance, I
              achieved a 5% prediction error using LSTMs, demonstrating the
              model's effectiveness in capturing temporal dependencies.
            </li>
            <li>
              This project highlighted the potential of ML for temperature
              prediction, laying the groundwork for future applications in
              building design and energy efficiency.
            </li>
          </ul>
        }
        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg/330px-Indian_Institute_of_Technology_Roorkee_Logo.svg.png"
      />
    </div>
  );
}
