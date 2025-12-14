import React, { createContext, useState, useEffect } from 'react';
import { api } from '../utils/apiHelper';

export const EducationContext = createContext();

export function EducationProvider({ children }) {
    const [educationList, setEducationList] = useState([]);
    const [certificateList, setCertificateList] = useState([]);

    useEffect(() => {
        api.get('/education').then(data => setEducationList(data)).catch(console.error);
        api.get('/certificates').then(data => setCertificateList(data)).catch(console.error);
    }, []);

    // Education Actions
    const addEducation = async (edu) => {
        try {
            const newItem = await api.post('/education', edu);
            setEducationList((prev) => [newItem, ...prev]);
        } catch (error) {
            console.error(error); alert("Failed to add education");
        }
    };

    const updateEducation = async (updatedEdu) => {
        try {
            const data = await api.put(`/education/${updatedEdu._id}`, updatedEdu);
            setEducationList((prev) => prev.map((item) => (item._id === data._id ? data : item)));
        } catch (error) {
            console.error(error); alert("Failed to update education");
        }
    };

    const deleteEducation = async (id) => {
        try {
            await api.delete(`/education/${id}`);
            setEducationList((prev) => prev.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error); alert("Failed to delete education");
        }
    };

    // Certificate Actions
    const addCertificate = async (cert) => {
        try {
            const newItem = await api.post('/certificates', cert);
            setCertificateList((prev) => [newItem, ...prev]);
        } catch (error) {
            console.error(error); alert("Failed to add certificate");
        }
    };

    const updateCertificate = async (updatedCert) => {
        try {
            const data = await api.put(`/certificates/${updatedCert._id}`, updatedCert);
            setCertificateList((prev) => prev.map((item) => (item._id === data._id ? data : item)));
        } catch (error) {
            console.error(error); alert("Failed to update certificate");
        }
    };

    const deleteCertificate = async (id) => {
        try {
            await api.delete(`/certificates/${id}`);
            setCertificateList((prev) => prev.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error); alert("Failed to delete certificate");
        }
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
