// import React from "react";
import ProjectCard from "./ProjectCard.js";
import AI from "../assets/ai.svg";
import HelloFresh from "../assets/hellofresh.svg";
import Flyleaf from "../assets/flyleaf.svg";
import SuperTTT from "../assets/superttt.svg";
export default function ProjectsSection() {
  return (
    <section className="mt-10 satoshi-700 text-para dark:text-foregroundDark text-xl pb-20">
      <h1 className="mb-10 cabinet-700">Latest projects</h1>
      <ul className="flex flex-col gap-y-6">
        <li className="flex gap-x-8 flex-wrap sm:gap-x-0 sm:gap-y-8">
          <ProjectCard
            name="Fluid-flow reconstruction"
            image={AI}
            description="Enhanced reconstruction using EPOD/PCA, SVD, and ML models (U-Net CNN, SR-GAN) in Keras, 
            improving performance by 15% and boosting temporal resolution for detailed supersonic jet flow analysis."
            detailedDescription={`Designed and implemented a dual high-speed camera setup to capture high-frame-rate Schlieren images of supersonic jet flows.
            Applied traditional flow reconstruction techniques, such as Proper Orthogonal Decomposition (POD) and Singular Value Decomposition (SVD), to analyse and reconstruct flow patterns.
            Developed and trained machine learning models, including U-Net Convolutional Neural Networks (CNN) and Super-Resolution Generative Adversarial Networks (SR-GAN), using Keras to enhance image resolution and reconstruction accuracy.`}
            outcomes={`Enhanced the temporal resolution of the Schlieren measurement system, enabling more detailed visualisation of supersonic jet flows.
            Achieved a 15% improvement in flow reconstruction accuracy by leveraging machine learning models over traditional methods like EPOD.      
            Enabled clearer and more accurate analysis of supersonic jet dynamics, contributing to a better understanding of fluid flow patterns.`}
          />
          <ProjectCard
            name="Flyleaf"
            image={Flyleaf}
            description="Building a website that helps users track their reading progress, discover new books, and develop consistent reading habits 
            through tailored suggestions and progress tracking tools."
            rotate
          />
        </li>
        <li className="flex gap-x-8 flex-wrap sm:gap-x-0 sm:gap-y-8">
          <ProjectCard
            name="Super TTT"
            image={SuperTTT}
            description="Developed multi-player Ultimate Tic-Tac-Toe with expanded rules for enhanced strategy. 
            Utilized WebSocket-based communication and OOP for game state management, matchmaking, 
            and smooth interactions."
            detailedDescription={`Developed Ultimate Tic-Tac-Toe, a complex variant of the classic game with expanded rules and increased strategic depth.
            Implemented WebSocket-based communication and Object-Oriented Programming (OOP) principles in NodeJS for efficient game state management, matchmaking, and seamless player interactions.
            Designed and built a responsive and intuitive user interface using ReactJS, featuring real-time board state updates and visual cues for valid moves.`}
            // outcomes={`Delivered a user-friendly interface with real-time updates, improving the overall player experience.`}
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
