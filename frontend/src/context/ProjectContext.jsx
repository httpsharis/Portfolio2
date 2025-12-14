import { useState, useEffect } from 'react';
import { ProjectContext } from '../utils/ProjectContextUtils';
import { api } from '../utils/apiHelper';

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects on mount
        api.get('/projects')
            .then(data => setProjects(data))
            .catch(err => console.error("Failed to fetch projects:", err));
    }, []);

    const addProject = async (project) => {
        try {
            const newProject = await api.post('/projects', project);
            setProjects((prev) => [newProject, ...prev]);
        } catch (error) {
            console.error("Failed to add project", error);
            alert("Failed to add project");
        }
    };

    const updateProject = async (updatedProject) => {
        try {
            const data = await api.put(`/projects/${updatedProject._id}`, updatedProject);
            setProjects((prev) => prev.map((p) => (p._id === data._id ? data : p)));
        } catch (error) {
            console.error("Failed to update project", error);
            alert("Failed to update project");
        }
    };

    const deleteProject = async (id) => {
        try {
            await api.delete(`/projects/${id}`);
            setProjects((prev) => prev.filter((p) => p._id !== id));
        } catch (error) {
            console.error("Failed to delete project", error);
            alert("Failed to delete project");
        }
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
}
