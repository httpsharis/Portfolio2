import React, { useContext, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import { SkillsContext } from '../../context/SkillsContext';
import EditControls from '../ui/EditControls';
import Modal from '../ui/Modal';
import SkillsForm from '../forms/SkillsForm';

/**
 * Skills section displaying technical expertise.
 */
export default function Skills() {
    const { skillsList, addSkillCategory, updateSkillCategory, deleteSkillCategory } = useContext(SkillsContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSkill, setEditingSkill] = useState(null);

    // Helper to get icon based on title (simple logic for now)
    const getIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('frontend')) return <Layout className="text-blue-500" />;
        if (t.includes('backend') || t.includes('db') || t.includes('data')) return <Server className="text-green-500" />;
        return <Wrench className="text-orange-500" />;
    };

    const handleAdd = () => {
        setEditingSkill(null);
        setIsModalOpen(true);
    };

    const handleEdit = (skill) => {
        setEditingSkill(skill);
        setIsModalOpen(true);
    };

    const handleSave = (data) => {
        if (editingSkill) updateSkillCategory(data);
        else addSkillCategory(data);
        setIsModalOpen(false);
    };

    return (
        <section id="stack" className="mb-32">
            <div className="flex justify-between items-end mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Technical Skills</h2>
                <EditControls onAdd={handleAdd} />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {skillsList.map((skill) => (
                    <div key={skill._id} className="group relative">
                        <EditControls
                            variant="overlay"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onEdit={() => handleEdit(skill)}
                            onDelete={() => deleteSkillCategory(skill._id)}
                        />
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            {getIcon(skill.title)} {skill.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span key={item} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingSkill ? 'Edit Skill Category' : 'Add Skill Category'}
            >
                <SkillsForm
                    initialData={editingSkill}
                    onSave={handleSave}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </section>
    );
}
