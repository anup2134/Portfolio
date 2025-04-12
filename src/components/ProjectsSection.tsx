import ProjectCard from "./ProjectCard.js";
import AI from "../assets/ai.svg";
import HelloFresh from "../assets/hellofresh.svg";
import Flyleaf from "../assets/flyleaf.svg";
import SuperTTT from "../assets/superttt.svg";
import PersonalDrive from "../assets/personal-drive.svg";

export default function ProjectsSection() {
  return (
    <section className="mt-10 satoshi-700 text-para dark:text-foregroundDark text-xl pb-20">
      <h1 className="mb-10 alpino-700 transition-colors duration-700 dark:text-foregroundDark text-[22px] text-backgroundDark">
        Latest projects
      </h1>
      <ul className="flex flex-col gap-y-6">
        <li className="flex flex-wrap gap-8">
          <ProjectCard
            name="Personal Drive"
            description="A Google Drive-like platform for uploading, managing, and accessing files. It features intelligent, 
            context-aware search and query-based answering for text files (PDFs, Word docs), and supports collaboration via 
            group-based access control and shared workspaces."
            image={PersonalDrive}
            rotate
          />
          <ProjectCard
            name="Flyleaf"
            image={Flyleaf}
            description="Building a website that helps users track their reading progress, discover new books, and develop consistent reading habits 
            through tailored suggestions and progress tracking tools."
          />
        </li>
        <li className="flex flex-wrap gap-8">
          <ProjectCard
            name="Super TTT"
            image={SuperTTT}
            description="Developed multi-player Ultimate Tic-Tac-Toe with expanded rules for enhanced strategy. 
            Utilized WebSocket-based communication and OOP for game state management, matchmaking, 
            and smooth interactions."
            rotate
          />

          <ProjectCard
            name="Fluid-flow reconstruction"
            image={AI}
            description="Enhanced reconstruction using EPOD/PCA, SVD, and ML models (U-Net CNN, SR-GAN) in Keras, 
            improving performance by 15% and boosting temporal resolution for detailed supersonic jet flow analysis."
          />
        </li>
        <li className="flex gap-8 flex-wrap">
          <ProjectCard
            name="Hello Fresh"
            description="Built a website showcasing nutritional details of fast foods from various chains,
            with data parsed from official PDFs, as an intro to React and API development."
            image={HelloFresh}
            rotate
          />
        </li>
      </ul>
    </section>
  );
}
