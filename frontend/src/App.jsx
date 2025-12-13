import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProjectProvider } from './context/ProjectContext';
import { ExperienceProvider } from './context/ExperienceContext';
import { EducationProvider } from './context/EducationContext';
import { SkillsProvider } from './context/SkillsContext';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { AdminProvider } from './context/AdminContext';
import LoadingScreen from './components/ui/LoadingScreen';

/**
 * App component.
 * Configures global providers and routing.
 */
function App() {
  const [loading, setLoading] = React.useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <AdminProvider>
      <ProjectProvider>
        <ExperienceProvider>
          <EducationProvider>
            <SkillsProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </BrowserRouter>
            </SkillsProvider>
          </EducationProvider>
        </ExperienceProvider>
      </ProjectProvider>
    </AdminProvider>
  );
}

export default App;
