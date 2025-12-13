import { useState } from 'react';
import { initialProjects } from '../data/initialProjects';
import { ProjectContext } from '../utils/ProjectContextUtils';

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState(initialProjects);

    const addProject = (project) => {
        setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);
    };

    const updateProject = (updatedProject) => {
        setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    };

    const deleteProject = (id) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
}
