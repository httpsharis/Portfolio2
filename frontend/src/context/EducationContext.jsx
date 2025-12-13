import { createContext, useState } from 'react';
import { educationData as initialEduData } from '../data/educationData';
import { certificateData as initialCertData } from '../data/certificateData';

export const EducationContext = createContext();

export function EducationProvider({ children }) {
    const [educationList, setEducationList] = useState(initialEduData);
    const [certificateList, setCertificateList] = useState(initialCertData);

    // Education Actions
    const addEducation = (edu) => {
        setEducationList((prev) => [{ ...edu, id: Date.now() }, ...prev]);
    };

    const updateEducation = (updatedEdu) => {
        setEducationList((prev) => prev.map((item) => (item.id === updatedEdu.id ? updatedEdu : item)));
    };

    const deleteEducation = (id) => {
        setEducationList((prev) => prev.filter((item) => item.id !== id));
    };

    // Certificate Actions
    const addCertificate = (cert) => {
        setCertificateList((prev) => [{ ...cert, id: Date.now() }, ...prev]);
    };

    const updateCertificate = (updatedCert) => {
        setCertificateList((prev) => prev.map((item) => (item.id === updatedCert.id ? updatedCert : item)));
    };

    const deleteCertificate = (id) => {
        setCertificateList((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <EducationContext.Provider value={{
            educationList, addEducation, updateEducation, deleteEducation,
            certificateList, addCertificate, updateCertificate, deleteCertificate
        }}>
            {children}
        </EducationContext.Provider>
    );
}
