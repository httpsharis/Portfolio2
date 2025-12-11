import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useProjects } from '../utils/ProjectContextUtils';
import { Link } from 'react-router';
import { ArrowLeft, Save } from 'lucide-react';

/**
 * Admin page for managing projects.
 * Includes a simple PIN-based authentication.
 */
export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const { addProject } = useProjects();

    // Form State
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState('');
    const [link, setLink] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const correctPin = import.meta.env.VITE_ADMIN_PIN;
        if (pin === correctPin) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect PIN');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc) return;

        addProject({
            title,
            desc,
            tags: tags ? tags.split(',').map(t => t.trim()) : ['New'],
            link: link || '#'
        });

        // Reset form
        setTitle('');
        setDesc('');
        setTags('');
        setLink('');
        alert('Project added successfully!');
    };

    // Render Login Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 px-4">
                <Helmet>
                    <title>Admin Login | Muhammad Haris</title>
                </Helmet>
                <div className="w-full max-w-sm p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm">
                    <h1 className="text-2xl font-bold text-center mb-6">System Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter PIN"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl tracking-widest transition-all"
                            autoFocus
                        />
                        <div className="flex gap-4 pt-2">
                            <Link to="/" className="flex-1 py-3 text-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                Cancel
                            </Link>
                            <button type="submit" className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
                                Unlock
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    // Render Dashboard
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 p-6 sm:p-12">
            <Helmet>
                <title>Admin Dashboard | Muhammad Haris</title>
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <Link to="/" className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        Add New Project
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-neutral-500">Project Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-neutral-500">Description</label>
                            <textarea
                                rows="3"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-neutral-500">Tags (comma separated)</label>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="React, generic, Node"
                                className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-neutral-500">Project Link</label>
                            <input
                                type="url"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                placeholder="https://example.com"
                                className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                            />
                        </div>
                        <button type="submit" className="bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 w-full flex justify-center items-center gap-2 transition-opacity">
                            <Save size={18} /> Add Project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
