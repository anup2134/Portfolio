import ProjectCard from "./ProjectCard.js";
import AI from "../assets/ai.svg";
import HelloFresh from "../assets/hellofresh.svg";
import Flyleaf from "../assets/flyleaf.svg";
import SuperTTT from "../assets/superttt.svg";
import PersonalDrive from "../assets/personal-drive.svg?react";
import Clipboard from "../assets/clipboard.svg?react";

export default function ProjectsSection() {
  return (
    <section className="mt-10 satoshi-700 text-para dark:text-foregroundDark text-xl pb-20">
      <h1 className="mb-10 alpino-700 transition-colors duration-700 dark:text-foregroundDark text-[22px] text-backgroundDark">
        Latest projects
      </h1>
      <ul className="flex flex-col gap-y-6">
        <li className="flex flex-wrap gap-8">
          <ProjectCard
            name="Clipboard Manager"
            description="Lightweight clipboard manager for X11 Linux desktops with a PyQt UI and Go backend. 
            Tracks and deduplicates clipboard history (text and images), using Unix Domain Sockets for fast, 
            secure communication between frontend and daemon."
            Image={Clipboard}
          />
          <ProjectCard
            name="Personal Drive"
            description="A Google Drive-like platform for uploading, managing, and accessing files. It features intelligent, 
            context-aware search and query-based answering for text files (PDFs, Word docs), and supports collaboration via 
            group-based access control and shared workspaces."
            Image={PersonalDrive}
            rotate
          />
        </li>
        <li className="flex flex-wrap gap-8">
          <ProjectCard
            name="Flyleaf"
            Image={Flyleaf}
            description="Building a website that helps users track their reading progress, discover new books, and develop consistent reading habits 
            through tailored suggestions and progress tracking tools."
          />
          <ProjectCard
            name="Super TTT"
            Image={SuperTTT}
            description="Developed multi-player Ultimate Tic-Tac-Toe with expanded rules for enhanced strategy. 
            Utilized WebSocket-based communication and OOP for game state management, matchmaking, 
            and smooth interactions."
            rotate
          />
        </li>
        <li className="flex gap-8 flex-wrap">
          <ProjectCard
            name="Fluid-flow reconstruction"
            Image={AI}
            description="Enhanced reconstruction using EPOD/PCA, SVD, and ML models (U-Net CNN, SR-GAN) in Keras, 
            improving performance by 15% and boosting temporal resolution for detailed supersonic jet flow analysis."
          />
          <ProjectCard
            name="Hello Fresh"
            description="Built a website showcasing nutritional details of fast foods from various chains,
            with data parsed from official PDFs, as an intro to React and API development."
            Image={HelloFresh}
            rotate
          />
        </li>
      </ul>
    </section>
  );
}
