import { useState } from 'react';
import { expData as initialExpData } from '../data/experienceData';
import { ExperienceContext } from '../utils/ExperienceUtils';

export function ExperienceProvider({ children }) {
    const [expData, setExpData] = useState(initialExpData);

    const addExperience = (experience) => {
        setExpData((prev) => [{ ...experience, id: Date.now() }, ...prev]);
    };

    const updateExperience = (updatedExperience) => {
        setExpData((prev) => prev.map((exp) => (exp.id === updatedExperience.id ? updatedExperience : exp)));
    };

    const deleteExperience = (id) => {
        setExpData((prev) => prev.filter((exp) => exp.id !== id));
    };

    return (
        <ExperienceContext.Provider value={{ expData, addExperience, updateExperience, deleteExperience }}>
            {children}
        </ExperienceContext.Provider>
    );
}