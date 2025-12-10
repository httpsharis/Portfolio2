import React from 'react';

export default function Experience() {
    return (
        <section id="experience" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Professional Experience</h2>

            <div className="group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Frontend Developer Intern</h3>
                    <span className="text-sm text-neutral-500 font-mono">March 2025 - May 2025</span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-3">Developershub.co | Lahore, Pakistan</p>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2 text-sm max-w-2xl">
                    <li>Developed responsive web applications using React.js and Tailwind CSS.</li>
                    <li>Built reusable components and implemented modern UI/UX designs.</li>
                    <li>Collaborated with cross-functional teams to deliver pixel-perfect frontend solutions.</li>
                    <li>Optimized application performance and ensured cross-browser compatibility.</li>
                </ul>
            </div>
        </section>
    );
}
