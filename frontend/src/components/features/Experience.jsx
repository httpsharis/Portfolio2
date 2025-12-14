import React, { useState } from 'react';
import { useExperience } from '../../utils/ExperienceUtils';
import EditControls from '../ui/EditControls';
import Modal from '../ui/Modal';
import ExperienceForm from '../forms/ExperienceForm';

export default function Experience() {
    const { expData, addExperience, updateExperience, deleteExperience } = useExperience();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingExperience, setEditingExperience] = useState(null);

    const handleAdd = () => {
        setEditingExperience(null);
        setIsModalOpen(true);
    };

    const handleEdit = (exp) => {
        setEditingExperience(exp);
        setIsModalOpen(true);
    };

    const handleSave = (data) => {
        if (editingExperience) {
            updateExperience(data);
        } else {
            addExperience(data);
        }
        setIsModalOpen(false);
    };

    return (
        <section id="experience" className="mb-32">
            <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Professional Experience</h2>
                <EditControls
                    onAdd={handleAdd}
                />
            </div>

            {/* Map over the main array of job experiences */}
            {expData.map((job) => (

                <div key={job._id} className="group mb-8 relative">
                    <EditControls
                        variant="overlay"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onEdit={() => handleEdit(job)}
                        onDelete={() => deleteExperience && deleteExperience(job._id)}
                    />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{job.title}</h3>
                        <span className="text-sm text-neutral-500 font-mono">{job.duration}</span>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-3">{job.company} | {job.location}</p>
                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2 text-sm max-w-2xl ">
                        {job.duties.map((duty, index) => (
                            <li key={index}>
                                {duty}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingExperience ? 'Edit Experience' : 'Add Experience'}
            >
                <ExperienceForm
                    initialData={editingExperience}
                    onSave={handleSave}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </section>
    );
}
