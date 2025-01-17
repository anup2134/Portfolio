import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./views/Layout";
import HomePage from "./views/HomePage";
import About from "./views/About";
import Projects from "./views/Projects";
import Resume from "./views/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
