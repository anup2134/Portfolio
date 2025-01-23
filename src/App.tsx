import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./views/Layout.js";
import HomePage from "./views/HomePage.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import Project from "./views/Project.js";
import Resume from "./views/Resume.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:name" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
