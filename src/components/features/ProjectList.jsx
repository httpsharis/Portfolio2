import React from 'react';
import { useProjects } from '../../context/ProjectContext';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';

export default function ProjectList() {
    const { projects } = useProjects();

    return (
        <section id="work" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Selected Projects</h2>

            <div className="space-y-4">
                {projects.map((p) => (
                    <div key={p.id} className="group flex flex-col sm:flex-row sm:items-baseline justify-between p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors bg-white dark:bg-transparent">
                        <div className="mb-4 sm:mb-0">
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
                        <div className="flex gap-2 flex-wrap">
                            {p.tags.map((t, index) => (
                                <span key={index} className="text-xs font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
