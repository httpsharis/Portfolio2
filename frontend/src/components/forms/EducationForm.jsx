import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function EducationForm({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState(() => {
        if (initialData) {
            return initialData;
        }
        return {
            degree: '',
            institution: '',
            duration: ''
        };
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...initialData,
            ...formData
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Degree / Certificate</label>
                <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    required
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Institution</label>
                <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    required
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-neutral-400">Duration (Optional)</label>
                <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="2018 - 2022"
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl p-3 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                />
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
                    <Save size={18} /> Save Education
                </button>
            </div>
        </form>
    );
}
