import React from 'react';
import { useExperience } from '../../utils/ExperienceUtils';

export default function Experience() {
    const { expData } = useExperience();

    return (
        <section id="experience" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Professional Experience</h2>

            {/* Map over the main array of job experiences */}
            {expData.map((job) => (

                <div key={job.id} className="group mb-8">
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
        </section>
    );
}
