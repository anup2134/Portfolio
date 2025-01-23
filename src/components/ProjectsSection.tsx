// import React from "react";
import ProjectCard from "./ProjectCard";
import AI from "../assets/ai.svg";
import HelloFresh from "../assets/hellofresh.svg";
import Flyleaf from "../assets/flyleaf.svg";
import SuperTTT from "../assets/superttt.svg";
export default function ProjectsSection() {
  return (
    <section className="mt-10 satoshi-700 text-para dark:text-foregroundDark text-xl pb-20">
      <h1 className="mb-10 cabinet-700">Latest projects</h1>
      <ul className="flex flex-col gap-y-6">
        <li className="flex gap-x-8">
          <ProjectCard
            name="Fluid-flow reconstruction"
            image={AI}
            description="Enhanced reconstruction using EPOD/PCA, SVD, and ML models (U-Net CNN, SR-GAN) in Keras, 
            improving performance by 15% and boosting temporal resolution for detailed supersonic jet flow analysis."
          />
          <ProjectCard
            name="Flyleaf"
            image={Flyleaf}
            description="Building a website that helps users track their reading progress, discover new books, and develop consistent reading habits 
            through tailored suggestions and progress tracking tools."
            rotate
          />
        </li>
        <li className="flex gap-x-8">
          <ProjectCard
            name="Super TTT"
            image={SuperTTT}
            description="Developed multi-player Ultimate Tic-Tac-Toe with expanded rules for enhanced strategy. 
            Utilized WebSocket-based communication and OOP for game state management, matchmaking, 
            and smooth interactions."
          />
          <ProjectCard
            name="Hello Fresh"
            description="Built a website showcasing nutritional details of fast foods from various chains,
            with data parsed from official PDFs, as an intro to React and API development."
            rotate
            image={HelloFresh}
          />
        </li>
      </ul>
    </section>
  );
}
