import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function ExperienceForm({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState(() => {
        if (initialData) {
            return {
                ...initialData,
                duties: Array.isArray(initialData.duties) ? initialData.duties.join('\n') : initialData.duties || ''
            };
        }
        return {
            title: '',
            company: '',
            location: '',
            duration: '',
            duties: ''
        };
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...initialData,
            ...formData,
            duties: formData.duties.split('\n').map(d => d.trim()).filter(Boolean)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Job Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Duration</label>
                <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Apr 2023 - Present"
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Duties (one per line)</label>
                <textarea
                    rows="5"
                    name="duties"
                    value={formData.duties}
                    onChange={handleChange}
                    placeholder="- Developed feature X..."
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
                    <Save size={18} /> Save Experience
                </button>
            </div>
        </form>
    );
}
