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
            detailedDescription={`A web application aimed at helping users track their reading progress, discover new books, and develop consistent reading habits.
            Features personalized book recommendations and progress tracking tools to keep users motivated.
            Built with Next.js for a fast, responsive, and SEO-friendly front-end.
            Uses Node.js for the backend, handling API requests and managing user data efficiently.
            Implements Zustand for lightweight and scalable state management.
            Supports local authentication and Google OAuth 2.0 for secure and flexible user login.`}
            outcomes={`Completed: Core UI, authentication system, and basic tracking features.
            In Progress: Enhanced recommendation system and refined user experience.
            Upcoming: Social features, AI-driven book suggestions, and cross-platform support.`}
          />
        </li>
        <li className="flex gap-x-8 flex-wrap sm:gap-x-0 sm:gap-y-8">
          <ProjectCard
            name="Super TTT"
            image={SuperTTT}
            description="Developed multi-player Ultimate Tic-Tac-Toe with expanded rules for enhanced strategy. 
            Utilized WebSocket-based communication and OOP for game state management, matchmaking, 
            and smooth interactions."
            detailedDescription={`A web-based implementation of Ultimate Tic-Tac-Toe, an advanced version of the classic game with enhanced rules and deeper strategic gameplay.
            Developed using Node.js with WebSockets for real-time, interactive multiplayer gameplay.
            Applied Object-Oriented Programming (OOP) principles for efficient game state management and seamless player matchmaking.
            Built a responsive, intuitive UI with ReactJS, ensuring smooth user interactions and real-time board updates.
            Implemented visual indicators for valid moves, game status, and player turns, enhancing usability and clarity.`}
            outcomes={`Strengthened expertise in real-time WebSocket communication and OOP design patterns.
            Gained practical experience in state synchronization and managing concurrent user interactions.`}
          />
          <ProjectCard
            name="Hello Fresh"
            description="Built a website showcasing nutritional details of fast foods from various chains,
            with data parsed from official PDFs, as an intro to React and API development."
            rotate
            image={HelloFresh}
            detailedDescription={`A web application that showcases detailed nutritional information for fast-food items from various chains.
            Data is sourced from official nutrition PDFs, parsed programmatically, and stored for easy access.
            Built using React for an interactive front-end and a custom API for efficient data retrieval.
            Users can search, filter, and compare menu items based on calories, macronutrients, and other details.
            Focused on providing a clean, user-friendly interface for quick nutritional insights.
            Serves as an introductory project to React development, API design, and data extraction techniques.`}
            outcomes={`Strengthened skills in React, API development, and data parsing.
            Gained experience in handling structured data from PDFs and optimizing UI/UX.
            Improved understanding of state management and efficient data fetching.
            Established a foundation for future features like user accounts, AI insights, and mobile expansion.`}
          />
        </li>
      </ul>
    </section>
  );
}
