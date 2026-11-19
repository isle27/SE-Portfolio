import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Projects from './page/Projects';
import type { Project } from './component/ProjectCard';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/projects', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Projects unavailable');
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Invalid projects response');
        setProjects(data);
      })
      .catch(() => {
        if (!controller.signal.aborted) setLoadError(true);
      });
    return () => controller.abort();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {loadError && <p role="status">Projects are temporarily unavailable.</p>}
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
