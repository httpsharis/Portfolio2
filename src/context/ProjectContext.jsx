import React, { createContext, useContext, useState } from 'react';
import { initialProjects } from '../data/initialProjects';

const ProjectContext = createContext();

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

export function useProjects() {
    return useContext(ProjectContext);
}
