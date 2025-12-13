import React from 'react';
import { educationData } from '../../data/educationData';
import { certificateData } from '../../data/certificateData';

export default function Education() {
    return (
        <section id="education" className="mb-32">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Education</h2>

            <div className="space-y-10">
                {educationData.map((item) => (
                    <div key={item.id}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.degree}</h3>
                            {item.duration && <span className="text-sm text-neutral-500 font-mono">{item.duration}</span>}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">{item.institution}</p>
                    </div>
                ))}
            </div>

            {/* Certificates Section */}
            <div className="mt-16">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800 pb-2">Certifications</h2>
                <div className="space-y-6">
                    {certificateData.map((cert) => (
                        <div key={cert.id}>
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{cert.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
