import { createContext, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

export const SkillsContext = createContext();

const initialSkills = [
    {
        title: 'Frontend',
        items: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
        title: 'Backend & DB',
        items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB']
    },
    {
        title: 'Tools & Others',
        items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Context API']
    }
];

export function SkillsProvider({ children }) {
    const [skillsList, setSkillsList] = useState(initialSkills);

    const addSkillCategory = (category) => {
        setSkillsList((prev) => [...prev, category]);
    };

    const updateSkillCategory = (updatedCategory) => {
        setSkillsList((prev) => prev.map((item) => (item.title === updatedCategory.originalTitle ? updatedCategory : item)));
    };

    const deleteSkillCategory = (title) => {
        setSkillsList((prev) => prev.filter((item) => item.title !== title));
    };

    return (
        <SkillsContext.Provider value={{ skillsList, addSkillCategory, updateSkillCategory, deleteSkillCategory }}>
            {children}
        </SkillsContext.Provider>
    );
}
