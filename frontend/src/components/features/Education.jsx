import React, { useContext, useState } from 'react';
import { EducationContext } from '../../context/EducationContext';
import EditControls from '../ui/EditControls';
import Modal from '../ui/Modal';
import EducationForm from '../forms/EducationForm';
import CertificateForm from '../forms/CertificateForm';

export default function Education() {
    const {
        educationList, addEducation, updateEducation, deleteEducation,
        certificateList, addCertificate, updateCertificate, deleteCertificate
    } = useContext(EducationContext);

    // State for Education Modal
    const [isEduModalOpen, setIsEduModalOpen] = useState(false);
    const [editingEdu, setEditingEdu] = useState(null);

    // State for Certificate Modal
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [editingCert, setEditingCert] = useState(null);

    // Education Handlers
    const handleAddEdu = () => {
        setEditingEdu(null);
        setIsEduModalOpen(true);
    };
    const handleEditEdu = (item) => {
        setEditingEdu(item);
        setIsEduModalOpen(true);
    };
    const handleSaveEdu = (data) => {
        if (editingEdu) updateEducation(data);
        else addEducation(data);
        setIsEduModalOpen(false);
    };

    // Certificate Handlers
    const handleAddCert = () => {
        setEditingCert(null);
        setIsCertModalOpen(true);
    };
    const handleEditCert = (item) => {
        setEditingCert(item);
        setIsCertModalOpen(true);
    };
    const handleSaveCert = (data) => {
        if (editingCert) updateCertificate(data);
        else addCertificate(data);
        setIsCertModalOpen(false);
    };

    return (
        <section id="education" className="mb-32">
            {/* Education Section */}
            <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Education</h2>
                <EditControls onAdd={handleAddEdu} />
            </div>

            <div className="space-y-10">
                {educationList.map((item) => (
                    <div key={item._id} className="group relative">
                        <EditControls
                            variant="overlay"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onEdit={() => handleEditEdu(item)}
                            onDelete={() => deleteEducation(item._id)}
                        />
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.degree}</h3>
                            {item.duration && <span className="text-sm text-neutral-500 font-mono">{item.duration}</span>}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">{item.institution}</p>
                    </div>
                ))}
            </div>

            {/* Certificates Section */}
            <div className="mt-16">
                <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Certifications</h2>
                    <EditControls onAdd={handleAddCert} />
                </div>
                <div className="space-y-6">
                    {certificateList.map((cert) => (
                        <div key={cert._id} className="group relative">
                            <EditControls
                                variant="overlay"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onEdit={() => handleEditCert(cert)}
                                onDelete={() => deleteCertificate(cert._id)}
                            />
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{cert.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={isEduModalOpen}
                onClose={() => setIsEduModalOpen(false)}
                title={editingEdu ? 'Edit Education' : 'Add Education'}
            >
                <EducationForm
                    initialData={editingEdu}
                    onSave={handleSaveEdu}
                    onCancel={() => setIsEduModalOpen(false)}
                />
            </Modal>

            <Modal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
                title={editingCert ? 'Edit Certificate' : 'Add Certificate'}
            >
                <CertificateForm
                    initialData={editingCert}
                    onSave={handleSaveCert}
                    onCancel={() => setIsCertModalOpen(false)}
                />
            </Modal>
        </section>
    );
}
