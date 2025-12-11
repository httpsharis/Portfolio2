import { useContext, createContext } from "react";

export const ExperienceContext = createContext();

export function useExperience() {
    const context = useContext(ExperienceContext);
    if (!context) {
        throw new Error('useExperience must be used within a ExperienceProvider');
    }
    return context;
}