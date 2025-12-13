import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProjectProvider } from './context/ProjectContext';
import { ExperienceProvider } from './context/ExperienceContext';
import Home from './pages/Home';
import Admin from './pages/Admin';

/**
 * App component.
 * Configures global providers and routing.
 */
function App() {
  return (
    <ProjectProvider>
      <ExperienceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ExperienceProvider>
    </ProjectProvider>
  );
}

export default App;
