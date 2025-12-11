import { useState } from 'react';
import { initialProjects } from '../data/initialProjects';
import { ProjectContext } from '../utils/ProjectContextUtils';

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState(initialProjects);

    const addProject = (project) => {
        setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectContext.Provider>
    );
}
