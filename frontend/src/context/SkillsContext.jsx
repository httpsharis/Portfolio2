import { createContext, useState, useEffect } from 'react';
import { api } from '../utils/apiHelper';

export const SkillsContext = createContext();

export function SkillsProvider({ children }) {
    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        api.get('/skills').then(data => setSkillsList(data)).catch(console.error);
    }, []);

    const addSkillCategory = async (category) => {
        try {
            const newItem = await api.post('/skills', category);
            setSkillsList((prev) => [...prev, newItem]);
        } catch (error) {
            console.error(error); alert("Failed to add skill category");
        }
    };

    const updateSkillCategory = async (updatedCategory) => {
        try {
            // We use _id here, but need to make sure the form passes it or we find it
            // The previous logic used 'originalTitle' to find the item.
            // We should ideally use ID now. 
            // Assuming the UI will pass the full object including _id.
            const data = await api.put(`/skills/${updatedCategory._id}`, updatedCategory);
            setSkillsList((prev) => prev.map((item) => (item._id === data._id ? data : item)));
        } catch (error) {
            console.error(error); alert("Failed to update skill category");
        }
    };

    const deleteSkillCategory = async (titleOrId) => {
        // Since we are likely passing title from the UI, we should probably change UI to pass ID.
        // But for now, let's find the ID if we only have title, or change UI.
        // Actually, let's assume we will update the UI to use IDs.
        // But wait, the current UI passes 'title' to delete.
        // We need to find the ID first or update the UI. 
        // Let's rely on finding it in the list for now to get the ID.
        try {
            const skillToDelete = skillsList.find(s => s.title === titleOrId || s._id === titleOrId);
            if (!skillToDelete) return;

            await api.delete(`/skills/${skillToDelete._id}`);
            setSkillsList((prev) => prev.filter((item) => item._id !== skillToDelete._id));
        } catch (error) {
            console.error(error); alert("Failed to delete skill category");
        }
    };

    return (
        <SkillsContext.Provider value={{ skillsList, addSkillCategory, updateSkillCategory, deleteSkillCategory }}>
            {children}
        </SkillsContext.Provider>
    );
}
