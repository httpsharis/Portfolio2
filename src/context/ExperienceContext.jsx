import { expData } from '../data/experienceData';
import { ExperienceContext } from '../utils/ExperienceUtils';

export function ExperienceProvider({ children }) {
    return (
        <ExperienceContext.Provider value={{ expData }}>
            {children}
        </ExperienceContext.Provider>
    );
}