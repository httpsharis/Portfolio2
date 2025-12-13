import React, { useState } from 'react';
import { useProjects } from '../../utils/ProjectContextUtils';
import { ExternalLink } from 'lucide-react';
import EditControls from '../ui/EditControls';
import Modal from '../ui/Modal';
import ProjectForm from '../forms/ProjectForm';

export default function ProjectList() {
    const { projects, deleteProject, addProject, updateProject } = useProjects();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const handleAdd = () => {
        setEditingProject(null);
        setIsModalOpen(true);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const handleSave = (projectData) => {
        if (editingProject) {
            updateProject(projectData);
        } else {
            addProject(projectData);
        }
        setIsModalOpen(false);
    };

    return (
        <section id="work" className="mb-32">
            <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Selected Projects</h2>
                <EditControls
                    onAdd={handleAdd}
                />
            </div>

            <div className="space-y-4">
                {projects.map((p) => (
                    <div key={p.id} className="group relative flex flex-col sm:flex-row sm:items-start justify-between gap-6 p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors bg-white dark:bg-transparent">

                        <EditControls
                            variant="overlay"
                            onEdit={() => handleEdit(p)}
                            onDelete={() => deleteProject && deleteProject(p.id)}
                        />

                        <div className="mb-4 sm:mb-0 flex-1">
                            <a
                                href={p.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-lg font-bold group-hover:underline decoration-1 underline-offset-4 mb-1 hover:text-brand-blue transition-colors"
                            >
                                {p.title}
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md">{p.desc}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap sm:max-w-[200px] sm:justify-end shrink-0 mt-2 sm:mt-0">
                            {p.tags.map((t, index) => (
                                <span key={index} className="text-xs font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingProject ? 'Edit Project' : 'Add New Project'}
            >
                <ProjectForm
                    initialData={editingProject}
                    onSave={handleSave}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </section>
    );
}
