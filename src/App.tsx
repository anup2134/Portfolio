import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./views/Layout.js";
import HomePage from "./views/HomePage.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import Project from "./views/Project.js";
import PageNotFound from "./views/PageNotFound.tsx";
import AI from "./assets/ai.svg";
import Flyleaf from "./assets/flyleaf.svg";
import HF from "./assets/hellofresh.svg";
import TTT from "./assets/superttt.svg";
import PersonalDrive from "./assets/personal-drive.svg";

function App() {
  const [visited, setVisited] = useState(false);
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={<HomePage visited={visited} setVisited={setVisited} />}
          />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="project/Fluid-flow reconstruction"
            element={
              <Project
                image={AI}
                description={`Designed and implemented a dual high-speed camera setup to capture high-frame-rate Schlieren images of supersonic jet flows.
              Applied traditional flow reconstruction techniques, such as Proper Orthogonal Decomposition (POD) and Singular Value Decomposition (SVD), to analyse and reconstruct flow patterns.
              Developed and trained machine learning models, including U-Net Convolutional Neural Networks (CNN) and Super-Resolution Generative Adversarial Networks (SR-GAN), using Keras to enhance image resolution and reconstruction accuracy.`}
                outcomes={`Enhanced the temporal resolution of the Schlieren measurement system, enabling more detailed visualisation of supersonic jet flows.
                Achieved a 15% improvement in flow reconstruction accuracy by leveraging machine learning models over traditional methods like EPOD.      
                Enabled clearer and more accurate analysis of supersonic jet dynamics, contributing to a better understanding of fluid flow patterns.`}
              />
            }
          />
          <Route
            path="project/Flyleaf"
            element={
              <Project
                githubLink="https://github.com/anup2134/Flyleaf-Frontend"
                image={Flyleaf}
                description={`A web application aimed at helping users track their reading progress, discover new books, and develop consistent reading habits.
            Features personalized book recommendations and progress tracking tools to keep users motivated.
            Built with Next.js for a fast, responsive, and SEO-friendly front-end.
            Uses Node.js for the backend, handling API requests and managing user data efficiently.
            Implements Zustand for lightweight and scalable state management.
            Supports local authentication and Google OAuth 2.0 for secure and flexible user login.`}
                outcomes={`Completed: Core UI, authentication system, and basic tracking features.
              In Progress: Enhanced recommendation system and refined user experience.
              Upcoming: Social features, AI-driven book suggestions, and cross-platform support.`}
              />
            }
          />
          <Route
            path="project/Personal Drive"
            element={
              <Project
                githubLink="https://github.com/anup2134/Personal-Drive"
                image={PersonalDrive}
                description={`A secure cloud storage platform for uploading, organizing, and accessing files—offering a user experience similar to Google Drive.
            Enables intelligent document retrieval with semantic search and query-based answering for text files like PDFs and Word documents.
            Built with Django and Celery for a robust, asynchronous backend, and React with Redux and ShadCN for a modern, responsive UI.
            Utilizes Redis for task queuing, AWS S3 for scalable file storage, and integrates Langchain with Pinecone for context-aware document intelligence.
            Supports file sharing, collaborative workspaces, group-based access control, and is planning query rate-limiting to ensure fair usage.`}
                outcomes={`Improved productivity by reducing time spent searching through documents via semantic retrieval and instant answers.
          Enabled smoother collaboration for teams through shared workspaces and access control.`}
              />
            }
          />
          <Route
            path="project/Hello Fresh"
            element={
              <Project
                image={HF}
                githubLink="https://github.com/anup2134/fastfood-nutrition-app"
                description={`A web application that showcases detailed nutritional information for fast-food items from various chains.
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
            }
          />
          <Route
            path="project/Super TTT"
            element={
              <Project
                githubLink="https://github.com/anup2134/SuperTTT"
                image={TTT}
                description={`A web-based implementation of Ultimate Tic-Tac-Toe, an advanced version of the classic game with enhanced rules and deeper strategic gameplay.
            Developed using Node.js with WebSockets for real-time, interactive multiplayer gameplay.
            Applied Object-Oriented Programming (OOP) principles for efficient game state management and seamless player matchmaking.
            Built a responsive, intuitive UI with ReactJS, ensuring smooth user interactions and real-time board updates.
            Implemented visual indicators for valid moves, game status, and player turns, enhancing usability and clarity.`}
                outcomes={`Strengthened expertise in real-time WebSocket communication and OOP design patterns.
              Gained practical experience in state synchronization and managing concurrent user interactions.`}
              />
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
