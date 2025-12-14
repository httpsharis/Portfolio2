import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function SkillsForm({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState(() => {
        if (initialData) {
            return {
                title: initialData.title,
                items: Array.isArray(initialData.items) ? initialData.items.join(', ') : initialData.items || ''
            };
        }
        return {
            title: '',
            items: ''
        };
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            _id: initialData?._id, // IMPORTANT: Pass ID for updates
            title: formData.title,
            items: formData.items.split(',').map(s => s.trim()).filter(Boolean)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Category Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    required
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Skills (comma separated)</label>
                <textarea
                    rows="3"
                    name="items"
                    value={formData.items}
                    onChange={handleChange}
                    placeholder="React, CSS, HTML"
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                    required
                ></textarea>
            </div>

            <div className="flex gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 py-3 text-center text-sm font-bold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors bg-neutral-100 dark:bg-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2 transition-all shadow-lg shadow-neutral-500/20 dark:shadow-none"
                >
                    <Save size={18} /> Save Skills
                </button>
            </div>
        </form>
    );
}
