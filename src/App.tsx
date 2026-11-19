import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Projects from './page/Projects';
import { projects as fallbackProjects } from './page/projectData';

function App() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/projects', { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (Array.isArray(data)) setProjects(data);
      })
      .catch(() => {
        // The bundled portfolio remains available if the API is offline.
      });
    return () => controller.abort();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
