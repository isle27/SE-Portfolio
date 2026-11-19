import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Projects from './page/Projects';
import type { Project } from './component/ProjectCard';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading');

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
        setStatus('ready');
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('unavailable');
      });
    return () => controller.abort();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home projects={projects} status={status} />} />
        <Route path="/projects" element={<Projects projects={projects} status={status} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
